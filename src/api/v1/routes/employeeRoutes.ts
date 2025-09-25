import { Router } from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from "../services/employeeService";

const router = Router();

// Get all employees
router.get("/", (req, res) => {
  res.json(getAllEmployees());
});

// Get employee by ID
router.get("/:id", (req, res) => {
  const employee = getEmployeeById(Number(req.params.id));
  if (!employee) return res.status(404).json({ message: "Employee not found" });
  res.json(employee);
});

// Create new employee
router.post("/", (req, res) => {
  const newEmployee = createEmployee(req.body);
  res.status(201).json(newEmployee);
});

// Update employee
router.put("/:id", (req, res) => {
  const updatedEmployee = updateEmployee(Number(req.params.id), req.body);
  if (!updatedEmployee) return res.status(404).json({ message: "Employee not found" });
  res.json(updatedEmployee);
});

// Delete employee
router.delete("/:id", (req, res) => {
  const deleted = deleteEmployee(Number(req.params.id));
  if (!deleted) return res.status(404).json({ message: "Employee not found" });
  res.json({ message: "Employee deleted successfully" });
});

export default router;
