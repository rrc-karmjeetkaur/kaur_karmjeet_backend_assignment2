import { Router } from "express";
import * as branchController from "../controllers/branchController";

const router = Router();

// Get all branches
router.get("/", branchController.getAllBranches);

// Get a branch by ID
router.get("/:id", branchController.getBranchById);

// Create a new branch
router.post("/", branchController.createBranch);

// Update a branch by ID
router.put("/:id", branchController.updateBranch);

//Delete a branch by ID
router.delete("/:id", branchController.deleteBranch);

export default router;

  