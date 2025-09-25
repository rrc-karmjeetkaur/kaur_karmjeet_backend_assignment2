import { Employee, employees, getNextEmployeeId } from "../../../data/employees";

// Get all employees
export const getAllEmployees = (): Employee[] => {
  return employees;
};

// Get employee by ID
export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find(emp => emp.id === id);
};

// Create a new employee
export const createEmployee = (emp: Omit<Employee, "id">): Employee => {
  const newEmployee: Employee = {
    id: getNextEmployeeId(),
    ...emp
  };
  employees.push(newEmployee);
  return newEmployee;
};

// Update an employee
export const updateEmployee = (id: number, updatedData: Partial<Employee>): Employee | undefined => {
  const employee = employees.find(emp => emp.id === id);
  if (employee) {
    Object.assign(employee, updatedData);
  }
  return employee;
};

// Delete an employee
export const deleteEmployee = (id: number): boolean => {
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees.splice(index, 1);
    return true;
  }
  return false;
};
