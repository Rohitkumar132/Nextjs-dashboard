import { AppSidebar } from '@/components/app-sidebar';
// import SideNav from '../ui/dashboard/sidenav';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <AppSidebar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          <SidebarInset>
            <SidebarTrigger className="-ml-1" />
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
