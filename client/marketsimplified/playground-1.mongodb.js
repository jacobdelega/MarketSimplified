

// Select the database to use.
use('MarketSimplified');

// Delete user with email jacobdelega@gmail.com
// db.users.deleteOne({ email: 'jacobdelega@gmail.com'})
// db.users.deleteOne({ email: 'jacob@gmail.com'})


// lets get all the users in users collection
var users = db.users.find();

users
