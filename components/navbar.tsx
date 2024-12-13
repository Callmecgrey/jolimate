// components/navbar.tsx
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle mobile 'Resources' submenu
  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  // Handle scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); 
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/50 backdrop-blur-md border-b' : 'bg-background'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-purple-600">
          JoliMate
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="text-base font-medium">
                  Ads Space
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="text-base font-medium">
                  Top-Up
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center text-base font-medium focus:outline-none">
                    Resources <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  className="mt-2 w-40 bg-white shadow-md rounded-md p-2"
                  sideOffset={5}
                >
                  <DropdownMenu.Item>
                    <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                      About Us
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                      Blog
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Link href="/help-center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                      Help Center
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger Icon and "Download App" Button */}
        <div className="flex items-center gap-4">
          {/* Desktop "Download App" Button */}
          <div className="hidden md:block">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Download App
            </Button>
          </div>
          
          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <ul className="flex flex-col items-start gap-4 py-4 px-6">
            <li className="w-full">
              <Link href="#" className="text-base font-medium hover:underline" onClick={() => setIsOpen(false)}>
                Top-Up
              </Link>
            </li>
            
            {/* Mobile Resources Expandable Menu */}
            <li className="w-full">
              <button
                className="flex items-center justify-between w-full text-base font-medium focus:outline-none"
                onClick={toggleResources}
              >
                <span>Resources</span>
                {isResourcesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {isResourcesOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <li>
                    <Link href="/help-center" className="text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>
                      About Us
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            <li className="w-full">
              <Link href="#" className="text-base font-medium hover:underline" onClick={() => setIsOpen(false)}>
                Ads Space
              </Link>
            </li>

            {/* "Download App" Btn inside Mobile Menu */}
            <li className="w-full">
              <Button className="bg-purple-600 hover:bg-purple-700 w-full" onClick={() => setIsOpen(false)}>
                Download App
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
