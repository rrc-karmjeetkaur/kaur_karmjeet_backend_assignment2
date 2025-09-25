import { Request, Response } from "express";
import { Branch } from "../../../data/branches";

 export let branches = [
  { id: 1, name: "Vancouver Branch", address: "1300 Burrard St, Vancouver, BC, V6Z 2C7", phone: "604-456-0022" },
  { id: 2, name: "Edmonton Branch", address: "7250 82 Ave NW, Edmonton, AB, T6B 0G4", phone: "780-468-6800" },
  { id: 3, name: "Arborg Branch", address: "317-A Fisher Road, Arborg, MB, R0C 0A0", phone: "204-555-3461" },
  { id: 4, name: "Regina Branch", address: "3085 Albert, Regina, SK, S4S 0B1", phone: "206-640-2877" },
  { id: 5, name: "Winnipeg Branch", address: "1 Portage Ave, Winnipeg, MB, R3B 2B9", phone: "204-988-2402" },
  { id: 6, name: "Steinbach Branch", address: "330 Main St, Steinbach, MB, R5G 1Z1", phone: "204-326-3495" },
  { id: 7, name: "Montréal Branch", address: "511 Rue Jean-Talon O, Montréal, QC, H3N 1R5", phone: "514-277-5511" },
  { id: 8, name: "Toronto Branch", address: "440 Queen St W, Toronto, ON, M5V 2A8", phone: "416-980-2500" },
  { id: 9, name: "Saint John Branch", address: "500 Fairville Blvd, Saint John, NB, E2M 5H7", phone: "506-632-0225" },
  { id: 10, name: "Headingley Branch", address: "500 McIntosh Rd, Headingley, MB, R4H 1B6", phone: "204-999-5555" },
];

// GET all branches
export const getAllBranches = (_req: Request, res: Response) => {
  res.status(200).json(branches);
};

// GET branch by ID
export const getBranchById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const branch = branches.find(b => b.id === id);
  if (!branch) return res.status(404).json({ message: "Branch not found" });
  res.status(200).json(branch);
};

// CREATE a branch
export const createBranch = (req: Request, res: Response) => {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone) return res.status(400).json({ message: "All fields are required" });

  const newBranch: Branch = {
    id: branches.length ? Math.max(...branches.map(b => b.id)) + 1 : 1,
    name,
    address,
    phone,
  };
  branches.push(newBranch);
  res.status(201).json(newBranch);
};

// UPDATE a branch
export const updateBranch = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const branch = branches.find(b => b.id === id);
  if (!branch) return res.status(404).json({ message: "Branch not found" });

  const { name, address, phone } = req.body;
  if (name) branch.name = name;
  if (address) branch.address = address;
  if (phone) branch.phone = phone;

  res.status(200).json(branch);
};

// DELETE a branch
export const deleteBranch = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = branches.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: "Branch not found" });

  branches.splice(index, 1);
  res.status(200).json({ message: "Branch deleted successfully" });
};