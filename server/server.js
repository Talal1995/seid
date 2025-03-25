const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Comprehensive CORS Configuration
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://seid-uk15.onrender.com"
      : "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session Configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      httpOnly: true, // Prevent client-side JS from accessing the cookie
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    },
  })
);

// Passport config
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));
app.use("/api/survey", require("./routes/survey"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "../client/build")));

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.stack : {},
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
