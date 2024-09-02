// Select the database to use.
use("MarketSimplified");

// Delete user with email jacobdelega@gmail.com
// db.users.deleteOne({ email: 'jacobdelega@gmail.com'})
// db.users.deleteOne({ email: 'jacob@gmail.com'})
// db.users.deleteOne({ email: "company@gmail.com" });

// lets get all the users in users collection
// Find user where email is jacob@gmail.com

var users = db.users.find({});

// Delete one entry with emailk
// db.users.deleteOne({ email: "test@gmail.com" });
// db.users.deleteOne({ email: "test2@gmail.com" });
// db.users.deleteOne({ email: "test3@gmail.com" });


users;
