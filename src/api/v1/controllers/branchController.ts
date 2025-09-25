import { Request, Response } from "express";
import * as branchService from "../services/branchService";

export const getAllBranches = (req: Request, res: Response) => {
  res.status(200).json(branchService.getAllBranches());
};

export const getBranchById = (req: Request, res: Response) => {
  const branch = branchService.getBranchById(Number(req.params.id));
  if (!branch) return res.status(404).json({ message: "Branch not found" });
  res.status(200).json(branch);
};

export const createBranch = (req: Request, res: Response) => {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone) return res.status(400).json({ message: "Missing fields" });
  const newBranch = branchService.createBranch({ name, address, phone });
  res.status(201).json(newBranch);
};

export const updateBranch = (req: Request, res: Response) => {
  const updatedBranch = branchService.updateBranch(Number(req.params.id), req.body);
  if (!updatedBranch) return res.status(404).json({ message: "Branch not found" });
  res.status(200).json(updatedBranch);
};

export const deleteBranch = (req: Request, res: Response) => {
  const deleted = branchService.deleteBranch(Number(req.params.id));
  if (!deleted) return res.status(404).json({ message: "Branch not found" });
  res.status(200).json({ message: "Branch deleted successfully" });
};
