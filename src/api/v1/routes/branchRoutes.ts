import express from "express";
import {
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch,
} from "../controllers/branchController";
import { validate } from "../middleware/validate";
import { branchSchema } from "../validation/branchValidation";

const router = express.Router();

// Branch CRUD routes
router.get("/", getAllBranches);
router.get("/:id", getBranchById);
router.post("/", validate(branchSchema), createBranch); // Validation added
router.put("/:id", validate(branchSchema), updateBranch); // Validation added
router.delete("/:id", deleteBranch);

export default router;