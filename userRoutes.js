const express = require("express");
const router = express.Router();   // ✅ important

const User = require("../models/User");

router.get("/seed-users", async (req, res) => {
  await User.deleteMany();

  const users = [];

  for (let i = 1; i <= 10; i++) {
    users.push({
      name: "User " + i,
      email: "user" + i + "@gmail.com",
      password: "123",
      addresses: [{
        street: "Street " + i,
        city: "Karachi",
        postalCode: "74000"
      }]
    });
  }

  await User.insertMany(users);

  res.send("✅ Users inserted");
});

module.exports = router;
