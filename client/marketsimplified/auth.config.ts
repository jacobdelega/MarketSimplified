import { getUserFromEmail } from "@/queries/users";
import clientPromise from "./lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { createUser } from "@/queries/users";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
import { redirect } from "next/navigation";
const bcrypt = require("bcrypt");

const authConfig = {
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
        signOut: "/",
    },
    callbacks: {
        async signIn({ user, account }) {
            // console.log("User callback: ", user);
            // console.log("account callback: ", account);

            // User provides user specific data
            // account provides provider specific data
            if (account?.provider === "credentials") {
                return true;
            } else if (account?.provider === "google") {
                // Check if user exists in the DB
                const userExists = await getUserFromEmail(user.email);
                if (!userExists) {
                    // Create a new user with the USER data from google
                    // Redirect to onboarding once done

                    // Lets create a new user
                    await createUser({
                        name: user.name,
                        email: user.email,
                        provider: account.provider,
                    });

                    // Redirect to onboarding
                    return "/onboarding?email=" + user.email + "&account=" + account.provider;
                }

                return true;
            }
        },

        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },

        async session({ session, token, user }) {
            // console.log("session callback is being called", session, token, user);
            if (token) {
                session.user.id = token.id;
            }

            return session;
        },

        async redirect({ url, baseUrl }) {
            // console.log("redirect call back is being called")
            // Allows relative callback URLs
            if (url.startsWith("/")) {
                return `${baseUrl}${url}`;
            }
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,

            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
            allowDangerousEmailAccountLinking: true,
        }),
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                try {
                    // Lets get current user data
                    const user = await getUserFromEmail(credentials.email);
                    if (!user) {
                        throw new Error("User not found with that email");
                    }

                    // Compare reg password with hashed password
                    const isMatch = await bcrypt.compare(credentials.password, user.password);

                    if (isMatch === true) {
                        // Found a match so return user for callbacks
                        console.log("Success found");
                        return { id: user.id, name: user.name, email: user.email };
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
        }),
    ],
} satisfies NextAuthConfig;

export default authConfig;
