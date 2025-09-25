interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
}

let branches: Branch[] = [
  { id: 1, name: "Main Branch", address: "123 Main St", phone: "123-456-7890" },
  { id: 2, name: "Side Branch", address: "456 Side St", phone: "987-654-3210" },
];

let nextId = branches.length + 1;

export const getBranches = (): Branch[] => branches;
export const getBranch = (id: number): Branch | undefined => branches.find(b => b.id === id);
export const createBranch = (data: Omit<Branch, "id">): Branch => {
  const newBranch: Branch = { id: nextId++, ...data };
  branches.push(newBranch);
  return newBranch;
};
export const updateBranch = (id: number, data: Partial<Omit<Branch, "id">>): Branch | null => {
  const branch = branches.find(b => b.id === id);
  if (!branch) return null;
  Object.assign(branch, data);
  return branch;
};
export const deleteBranch = (id: number): boolean => {
  const index = branches.findIndex(b => b.id === id);
  if (index === -1) return false;
  branches.splice(index, 1);
  return true;
};