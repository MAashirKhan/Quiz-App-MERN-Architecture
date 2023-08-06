require('dotenv').config();

const MONGODB_CONFIG = {
    DB: process.env.MONGO_CS,
};

module.exports = {
    MONGODB_CONFIG,
};