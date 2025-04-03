const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
require("dotenv").config();

// Import the Consent model
const Consent = require("./models/Consent");

const app = express();
const PORT = process.env.PORT || 5001;

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://seid-uk15.onrender.com", // Deployed frontend
      "http://localhost:3000", // Local frontend
      "https://www.syrianexpertise.org", // Custom domain
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`❌ Blocked CORS request from: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow cookies and credentials
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ], // Allowed headers
};

app.use(cors(corsOptions)); // CORS Middleware
app.options("*", cors(corsOptions)); // Handle preflight requests
app.use(bodyParser.json()); // Ensures req.body is parsed correctly
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session Configuration (Keep only this one)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Secure cookies in production
      httpOnly: true, // Prevent client-side JS from accessing the cookie
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Cross-origin fix for production
    },
  })
);

// Passport config
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
console.log(
  "Connecting to MongoDB with URI:",
  process.env.MONGO_URI ? "Loaded" : "Not found"
);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));
app.use("/api/survey", require("./routes/survey"));

// Handle the consent data from the frontend
app.post("/api/cookie-consent", async (req, res) => {
  const { consent } = req.body;

  if (!consent || !["all", "essential"].includes(consent)) {
    return res.status(400).json({ message: "Invalid consent type" });
  }

  try {
    // Create a new consent record in the database
    const newConsent = new Consent({ consent });
    await newConsent.save();
    res.status(200).json({ message: "Consent saved successfully" });
  } catch (err) {
    console.error("❌ Error saving consent:", err);
    res.status(500).json({ message: "Error saving consent data" });
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "../client/build")));

  // The "catchall" handler: for any request that doesn't match one above
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(500).send({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.stack : {},
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});
