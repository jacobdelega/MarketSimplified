// route.js
import connectDB from "../../../lib/db";

export async function GET(req) {
    await connectDB();
    return new Response("Success!")
};
