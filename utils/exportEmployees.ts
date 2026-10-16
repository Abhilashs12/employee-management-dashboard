import type { Employee } from "@/types/employee";

export function exportEmployeesToCSV(employees: Employee[]) {
  const headers = [
    "Employee ID",
    "Name",
    "Email",
    "Department",
    "Role",
    "Status",
  ];

  const escapeCSV = (value: string) => `"${value.replace(/"/g, '""')}"`;

  const rows = employees.map((employee) => [
    employee.id,
    employee.name,
    employee.email,
    employee.department,
    employee.role,
    employee.status,
  ]);

  const csvContent = [
    headers.map(escapeCSV).join(","),
    ...rows.map((row) => row.map(escapeCSV).join(",")),
  ].join("\r\n");

  // UTF-8 BOM helps spreadsheet applications display text correctly.
  const blob = new Blob(["\uFEFF", csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "employees.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}
