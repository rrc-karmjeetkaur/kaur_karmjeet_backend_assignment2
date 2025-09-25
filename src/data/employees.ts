export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branch: number;
}

export const employees: Employee[] = [
  { id: 1, name: "Alice Johnson", position: "Branch Manager", department: "Management", email: "alice.johnson@pixell-river.com", phone: "604-555-0148", branch: 1 },
  { id: 2, name: "Amandeep Singh", position: "Customer Service Representative", department: "Customer Service", email: "amandeep.singh@pixell-river.com", phone: "780-555-0172", branch: 2 },
  { id: 3, name: "Maria Garcia", position: "Loan Officer", department: "Loans", email: "maria.garcia@pixell-river.com", phone: "204-555-0193", branch: 3 },
  // ... Add all other employees as needed
];

// Helper to get next ID for new employee
export const getNextEmployeeId = (): number => {
  return employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
};
