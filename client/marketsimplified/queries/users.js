import User from "@/models/users";
import connectDB from "@/lib/dbConnection";
// Create user
export async function createUser(userData) {
    if (!userData) {
        throw new Error("User data is required");
    }

    try {
        await connectDB();
        const activeUser = await getUserFromEmail(userData.email);

        if (!activeUser) {
            const newUser = await User.create(userData);
        } else {
            throw new Error("User already exists");
        }
    } catch (error) {
        throw new Error(error);
    }
}

export async function getUserFromDb(email, hashedPassword) {
    if (!email || !hashedPassword) {
        throw new Error("Email and password are required");
    }


    const user = User.findOne({
        email,
        password: hashedPassword,
    });

    return user;
}

export async function getUserFromEmail(email) {
    if (!email) {
        throw new Error("Email is required");
    }
    
    await connectDB();
    const foundUser = await User.findOne({
        email,
    });

    return foundUser;
}
