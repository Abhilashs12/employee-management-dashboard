"use client";

import { Download } from "lucide-react";
import type { Employee } from "@/types/employee";
import { exportEmployeesToCSV } from "@/utils/exportEmployees";

type ExportEmployeesButtonProps = {
  employees: Employee[];
};

export default function ExportEmployeesButton({
  employees,
}: ExportEmployeesButtonProps) {
  return (
    <button
      type="button"
      onClick={() => exportEmployeesToCSV(employees)}
      disabled={employees.length === 0}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C6FF00] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#D8FF4D] disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Download size={16} />
      Export CSV
    </button>
  );
}
