const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const userRoutes = require("./components/user/user.routes");
const sequelize = require("./config/database");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 3007;

const allowedOrigins = [
  "https://blog.radovanrasha.com",
  "http://localhost:3000",
];

app.get("/", (req, res) => {
  res.send("Blog API is up and running!");
});

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

sequelize
  .authenticate()
  .then(() => {
    // sequelize.sync().then(() => {
    //   console.log("Database synchronized.");
    // });
    console.log("Connection has been established successfully.");
  })
  .catch((error) => console.error("Unable to connect to the database:", error));

// Start the server
app.listen(port, () => {
  console.log(`App listening at PORT: ${port}`);
});
