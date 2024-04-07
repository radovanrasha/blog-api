require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "default_username",
    password: process.env.DB_PASSWORD || "default_password",
    database: process.env.DB_NAME || "database_development",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER || "default_username",
    password: process.env.DB_PASSWORD || "default_password",
    database: process.env.DB_NAME || "database_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER || "default_username",
    password: process.env.DB_PASSWORD || "default_password",
    database: process.env.DB_NAME || "database_production",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
};
