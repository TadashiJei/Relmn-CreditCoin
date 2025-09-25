"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Pill } from "@/components/pill"
import { Logo } from "@/components/logo"

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [canResend, setCanResend] = useState(false)
  const [countdown, setCountdown] = useState(60)

  // Countdown timer for resend
  useState(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true)
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length !== 6) return

    setIsLoading(true)
    // TODO: Implement OTP verification logic
    setTimeout(() => setIsLoading(false), 2000)
  }

  const handleResend = async () => {
    setCanResend(false)
    setCountdown(60)
    // TODO: Implement resend OTP logic
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Logo />
          </Link>
          <Pill className="mb-4">VERIFY EMAIL</Pill>
          <h1 className="text-3xl font-sentient mb-2">Enter verification code</h1>
          <p className="font-mono text-sm text-foreground/70">We've sent a 6-digit code to your email address</p>
        </div>

        <div className="bg-[#262626]/20 border border-border p-8 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)} className="gap-2">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="bg-background/50 border-border font-mono text-lg" />
                    <InputOTPSlot index={1} className="bg-background/50 border-border font-mono text-lg" />
                    <InputOTPSlot index={2} className="bg-background/50 border-border font-mono text-lg" />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} className="bg-background/50 border-border font-mono text-lg" />
                    <InputOTPSlot index={4} className="bg-background/50 border-border font-mono text-lg" />
                    <InputOTPSlot index={5} className="bg-background/50 border-border font-mono text-lg" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="text-center">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="font-mono text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Resend code
                  </button>
                ) : (
                  <p className="font-mono text-sm text-foreground/60">Resend code in {countdown}s</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-black hover:bg-primary/90 font-mono"
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-mono text-sm text-foreground/70">
              Wrong email?{" "}
              <Link href="/signup" className="text-primary hover:text-primary/80 transition-colors">
                Go back
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="font-mono text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
