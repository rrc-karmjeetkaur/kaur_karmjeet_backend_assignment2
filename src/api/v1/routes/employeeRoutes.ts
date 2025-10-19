import express from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeesByBranch,    
  getEmployeesByDepartment 
} from "../controllers/employeeController";
import { validate } from "../middleware/validate";
import { employeeSchema } from "../validation/employeeValidation";

const router = express.Router();

// Employee CRUD routes
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.post("/", validate(employeeSchema), createEmployee); // Validation added
router.put("/:id", validate(employeeSchema), updateEmployee); // Validation added
router.delete("/:id", deleteEmployee);

// Routes for filtering by branch or department
router.get("/branch/:branchId", getEmployeesByBranch);
router.get("/department/:department", getEmployeesByDepartment);

export default router;