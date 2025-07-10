// index.js

// Require express (CommonJS style)
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Route for root URL
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route with dynamic ID parameter
app.get("/:id", (req, res) => {
  res.send(`Hello World ${req.params.id}`);
});

// Only start server if run directly (not imported during testing)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export the app for testing
module.exports = app;
