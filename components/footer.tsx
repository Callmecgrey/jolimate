// components/footer.tsx
import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm text-white">
          © {currentYear} JoliMate Inc.
        </p>

        {/* Policy Links */}
        <div className="flex gap-8">
          <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-white hover:underline">
            Cookie Policy
          </Link>
          <Link href="/terms-of-use" className="text-sm text-gray-400 hover:text-white hover:underline">
            Terms of Use
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
