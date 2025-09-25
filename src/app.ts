import express from "express";
import morgan from "morgan";

import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";

const app = express();

app.use(morgan("combined"));
app.use(express.json());

// Health check
app.get("/health", (_req, res) => res.status(200).send("Server is healthy"));

// Mount both versions of the routes
app.use("/api/v1/employees", employeeRoutes);
app.use("/employees", employeeRoutes);   // <- add this
app.use("/api/v1/branches", branchRoutes);
app.use("/branches", branchRoutes);      // <- add this

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 

export default app;
