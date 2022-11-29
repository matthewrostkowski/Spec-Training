require('dotenv').config();

const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const discardAfterXDays = 14;
const URI = `mongodb+srv://allisoncui:BBdAChgEbtdPKz3x@specsources.vlrdwd2.mongodb.net/?retryWrites=true&w=majority`;


module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};