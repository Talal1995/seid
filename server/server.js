// server.js
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

require("dotenv").config();
// Initialize app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-session-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport config
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/your-database-name",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));
app.use("/api/survey", require("./routes/survey"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
