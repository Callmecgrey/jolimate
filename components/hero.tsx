import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:text-6xl lg:leading-[1.1]">
              Chat, Date
              <br />
              Make Friends
              <br />
              Have Fun,
              <br />
              Hangout
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              The ultimate dating app that goes beyond the swipe
            </p>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/placeholder.svg"
              alt="App Screenshot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}