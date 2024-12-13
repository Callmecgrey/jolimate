// components/footer.tsx
import Link from "next/link";
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © Copyright © 2024 JoliMate Inc.
        </p>
        <div className="flex gap-8">
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Cookie Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Terms of Use
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
