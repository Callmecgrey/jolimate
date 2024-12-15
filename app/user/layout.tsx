// app/user/layout.tsx
"use client";

import { Sidebar } from "@/components/sidebar/sidebar";
import { MobileFooterTabs } from "@/components/mobile/mobile-footer-tabs";
import { ReactNode } from "react";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar for Desktop */}
        <Sidebar className="hidden md:block" />

        {/* Main Content */}
        <main className="flex-grow bg-gray-100 p-4 md:p-8 overflow-auto">
          {children}
        </main>
      </div>

      {/* Mobile Footer Tabs */}
      <MobileFooterTabs className="block md:hidden" />
    </div>
  );
}
