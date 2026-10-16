import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-[#08090B] text-white">
      <div className="flex h-full">
        {/* Fixed sidebar */}
        <aside className="hidden h-screen w-[283px] shrink-0 border-r border-white/10 md:fixed md:inset-y-0 md:left-0 md:block">
          <div className="h-full overflow-y-auto">
            <Sidebar />
          </div>
        </aside>

        {/* Dashboard area */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden md:ml-[283px]">
          {/* Fixed topbar */}
          <header className="z-20 shrink-0 border-b border-white/10 bg-[#0D0F12]">
            <Topbar />
          </header>

          {/* Only this section scrolls */}
          <main className="min-h-0 flex-1 overflow-y-auto bg-[#08090B] p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
