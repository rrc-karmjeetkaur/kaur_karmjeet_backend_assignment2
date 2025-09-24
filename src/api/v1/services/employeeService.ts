import { employees, Employee } from "../../../data/employees";
import { branches, Branch } from "../../../data/branches";

// Get all employees
export const getAllEmployees = (): Employee[] => employees;

// Get employee by ID
export const getEmployeeById = (id: number): Employee | undefined =>
  employees.find((emp: Employee) => emp.id === id);

// Add a new employee
export const addEmployee = (employee: Employee): void => {
  employees.push(employee);
};

// Update an existing employee
export const updateEmployee = (id: number, updatedData: Partial<Employee>): void => {
  const index = employees.findIndex((emp: Employee) => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedData };
  }
};

// Delete an employee
export const deleteEmployee = (id: number): void => {
  const index = employees.findIndex((emp: Employee) => emp.id === id);
  if (index !== -1) {
    employees.splice(index, 1);
  }
};
