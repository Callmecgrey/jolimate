import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/50 backdrop-blur-md z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-purple-600">
          JoliMate
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium">
                  TOP-UP
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium">
                  RESOURCES
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium">
                  ADS SPACE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="bg-purple-600 hover:bg-purple-700">
          Download App
        </Button>
      </div>
    </header>
  )
}
