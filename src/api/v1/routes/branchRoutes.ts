import express from "express";
import { getAllBranches, getBranchById } from "../services/branchService";

const router = express.Router();

router.get("/", (req, res) => res.json(getAllBranches()));

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const branch = getBranchById(id);
  if (branch) res.json(branch);
  else res.status(404).json({ message: "Branch not found" });
});

export default router;
  