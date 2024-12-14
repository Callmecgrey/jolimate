// components/footer.tsx
import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} JoliMate Inc.
        </p>
        <div className="flex gap-8">
          <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:underline">
            Cookie Policy
          </Link>
          <Link href="/terms-of-use" className="text-sm text-muted-foreground hover:underline">
            Terms of Use
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
