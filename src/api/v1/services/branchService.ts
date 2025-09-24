import { branches, Branch } from "../../../data/branches";


export const getAllBranches = (): Branch[] => branches;


export const getBranchById = (id: number): Branch | undefined =>
  branches.find((branch: Branch) => branch.id === id);
