// route.js
import connectDB from "../../../lib/db";
import User from "../../../models/emails";

export async function POST(req) {
    await connectDB();

    if (!req.body) { // Handle missing form data
        return res.status(400).json({ message: 'Missing form data' });
    }

    const formData = await req.formData(); // Access form data
    const name = formData.get('name');
    const email = formData.get('email');

    // Let add the user
    const user = new User({ name, email });
    await user.save(); // Save to database

    return Response.json({name, email})
}
