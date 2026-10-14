import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        <div className="hidden shrink-0 md:block">
          <Sidebar />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <main className="flex-1 p-5 sm:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
