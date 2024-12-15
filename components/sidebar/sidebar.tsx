// components/sidebar/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, MapPin, MessageCircle, User, LogOut } from "lucide-react";
import classNames from "classnames";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Explore", href: "/user/explore", icon: <Compass className="h-5 w-5" /> },
  { label: "Map Finder", href: "/user/map-finder", icon: <MapPin className="h-5 w-5" /> },
  { label: "Chat", href: "/user/chat", icon: <MessageCircle className="h-5 w-5" /> },
  { label: "Profile", href: "/user/profile", icon: <User className="h-5 w-5" /> },
  { label: "Logout", href: "/", icon: <LogOut className="h-5 w-5" /> }, // Ensure this aligns with your logout logic
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={classNames("w-64 bg-gray-800 text-white h-full", className)}>
      <div className="p-6 text-2xl font-bold">JoliMate</div>
      <nav className="mt-10">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label} // Added aria-label for accessibility
            className={classNames(
              "flex items-center py-2.5 px-4 rounded transition-colors duration-200",
              pathname === item.href
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:bg-gray-700 hover:text-white"
            )}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
