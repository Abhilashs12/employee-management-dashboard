import EmployeeTable from "@/components/employees/EmployeeTable";
import { employees } from "@/data/employees";

export default function EmployeesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 text-zinc-100">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#48CAE4]">
          Workspace / Employees
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Employee Directory<span className="text-[#C6FF00]">.</span>
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          View and search your organization employee records.
        </p>
      </div>
      <EmployeeTable employees={employees} />
    </div>
  );
}
