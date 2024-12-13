// components/ads/otp-verification.tsx
"use client"

import { useState, useRef, KeyboardEvent } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function OTPVerification() {
  const router = useRouter()
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const inputRefs = Array(6)
    .fill(0)
    .map(() => useRef<HTMLInputElement>(null))

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value && index < 5) {
        inputRefs[index + 1]?.current?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp]
      newOtp[index - 1] = ""
      setOtp(newOtp)
      inputRefs[index - 1]?.current?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Basic OTP validation
    if (otp.join("").length !== 6) {
      alert("Please enter a valid 6-digit OTP.")
      return
    }
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/ads/success")
  }

  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">OTP Verification</h2>
            <p className="text-sm text-gray-500">
              Please enter the OTP sent to <strong>support@amazon.com</strong>
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                className="h-12 w-12 text-center text-lg"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                required
              />
            ))}
          </div>

          {/* Resend OTP */}
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-purple-600 hover:text-purple-700"
              onClick={() => {
                // Implement resend OTP functionality
                alert("OTP has been resent to support@amazon.com")
              }}
            >
              RESEND OTP
            </button>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Verify OTP
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
