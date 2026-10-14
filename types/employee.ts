
export type EmployeeStatus = "Active" | "Inactive";

export type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  status: EmployeeStatus;
};

