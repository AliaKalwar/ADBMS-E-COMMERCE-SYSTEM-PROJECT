const express = require("express");
const app = express();

const connectDB = require("./config/db");

app.use(express.json());

connectDB();

// ✅ ROUTES (IMPORTANT)
app.use("/products", require("./routes/productRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/orders", require("./routes/orderRoutes"));

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
