import { Button } from "@/components/ui/button"
import Image from "next/image"

export function StayInControl() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  alt="Profile Example"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Stay in control</h2>
            <p className="text-lg text-muted-foreground">
              connect with people you desire
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700" size="lg">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}