interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
}

let employees: Employee[] = [
  { id: 1, name: "John Doe", role: "Developer", email: "john@example.com" },
  { id: 2, name: "Jane Smith", role: "Manager", email: "jane@example.com" },
];

let nextEmployeeId = employees.length + 1;

export const getEmployees = (): Employee[] => employees;

export const getEmployee = (id: number): Employee | undefined =>
  employees.find(emp => emp.id === id);

export const createEmployee = (data: Omit<Employee, "id">): Employee => {
  const newEmployee: Employee = { id: nextEmployeeId++, ...data };
  employees.push(newEmployee);
  return newEmployee;
};

export const updateEmployee = (id: number, data: Partial<Omit<Employee, "id">>): Employee | null => {
  const emp = employees.find(e => e.id === id);
  if (!emp) return null;
  Object.assign(emp, data);
  return emp;
};

export const deleteEmployee = (id: number): boolean => {
  const index = employees.findIndex(e => e.id === id);
  if (index === -1) return false;
  employees.splice(index, 1);
  return true;
};