"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pill } from "@/components/pill"
import { Logo } from "@/components/logo"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement forgot password logic
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <Pill className="mb-4">EMAIL SENT</Pill>
            <h1 className="text-3xl font-sentient mb-2">Check your email</h1>
            <p className="font-mono text-sm text-foreground/70">We've sent a password reset link to {email}</p>
          </div>

          <div className="bg-[#262626]/20 border border-border p-8 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
            <div className="text-center space-y-4">
              <div className="size-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <div className="size-8 bg-primary rounded-full" />
              </div>
              <p className="font-mono text-sm text-foreground/70">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full font-mono">
                Try Again
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="font-mono text-sm text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Logo />
          </Link>
          <Pill className="mb-4">RESET PASSWORD</Pill>
          <h1 className="text-3xl font-sentient mb-2">Forgot password?</h1>
          <p className="font-mono text-sm text-foreground/70">Enter your email and we'll send you a reset link</p>
        </div>

        <div className="bg-[#262626]/20 border border-border p-8 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-sm">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border font-mono"
                placeholder="your@email.com"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-black hover:bg-primary/90 font-mono"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-mono text-sm text-foreground/70">
              Remember your password?{" "}
              <Link href="/login" className="text-primary hover:text-primary/80 transition-colors">
                Sign in
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
