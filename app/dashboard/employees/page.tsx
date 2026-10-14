import EmployeeTable from "@/components/employees/EmployeeTable";
import { employees } from "@/data/employees";

export default function EmployeesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <p className="text-sm text-gray-500">Workspace / Employees</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          Employee Directory
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          View and search your organization's employee records.
        </p>
      </div>

      <EmployeeTable employees={employees} />
    </div>
  );
}
