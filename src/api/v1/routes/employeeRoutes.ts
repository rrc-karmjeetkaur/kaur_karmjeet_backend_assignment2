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

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
// New routes for Step 6
router.get("/branch/:branchId", getEmployeesByBranch);
router.get("/department/:department", getEmployeesByDepartment);

export default router;
