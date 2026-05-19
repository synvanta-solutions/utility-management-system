import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/app-sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <AppSidebar />
        <main className="min-h-screen mx-auto w-full">
          <Topbar />
          {children}
        </main>
      </TooltipProvider>
    </SidebarProvider>
  );
}