import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SkipLine() {
  return (
    <section className="bg-purple-600 py-24 text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Skip the
              <br />
              line
            </h2>
            <p className="text-lg opacity-90">
              Find those closer to you in spotlight and maps.
            </p>
            <p className="text-lg opacity-90">
              Ignite the spark with a conversation
            </p>
            <Button variant="secondary" size="lg" className="text-purple-600">
              Download App
            </Button>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="App Interface"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}