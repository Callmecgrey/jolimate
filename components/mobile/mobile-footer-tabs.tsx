// components/mobile/mobile-footer-tabs.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, MapPin, MessageCircle, User, LogOut } from "lucide-react";
import classNames from "classnames";

interface FooterTabItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const footerItems: FooterTabItem[] = [
  { label: "Explore", href: "/user/explore", icon: <Compass className="h-6 w-6" /> },
  { label: "Map Finder", href: "/user/map-finder", icon: <MapPin className="h-6 w-6" /> },
  { label: "Chat", href: "/user/chat", icon: <MessageCircle className="h-6 w-6" /> },
  { label: "Profile", href: "/user/profile", icon: <User className="h-6 w-6" /> },
];

interface MobileFooterTabsProps {
  className?: string;
}

export function MobileFooterTabs({ className }: MobileFooterTabsProps) {
  const pathname = usePathname();

  return (
    <footer
      className={classNames(
        "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16",
        className
      )}
    >
      {footerItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className={classNames(
            "flex flex-col items-center justify-center text-gray-500 hover:text-purple-600",
            pathname === item.href ? "text-purple-600" : ""
          )}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </footer>
  );
}
