import express from "express";
import { getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } from "../services/employeeService";

const router = express.Router();

router.get("/", (req, res) => res.json(getAllEmployees()));

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const employee = getEmployeeById(id);
  if (employee) res.json(employee);
  else res.status(404).json({ message: "Employee not found" });
});

router.post("/", (req, res) => {
  const newEmployee = req.body;
  addEmployee(newEmployee);
  res.status(201).json(newEmployee);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  updateEmployee(id, updatedData);
  res.json({ message: "Employee updated" });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  deleteEmployee(id);
  res.json({ message: "Employee deleted" });
});

export default router;
