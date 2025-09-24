import express from 'express';
import morgan from 'morgan';

import employeeRoutes from './api/v1/routes/employeeRoutes';
import branchRoutes from './api/v1/routes/branchRoutes';

const app = express();

app.use(morgan("combined"));
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.send("Server is healthy");
});

// Mount your API routes
app.use("/employees", employeeRoutes);
app.use("/branches", branchRoutes);

export default app;
