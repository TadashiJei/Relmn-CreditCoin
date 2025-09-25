"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Roadmap } from "@/components/roadmap"
import { Founder } from "@/components/founder"
import { GetStarted } from "@/components/get-started"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"
import { Leva } from "leva"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Roadmap />
      <Founder />
      <GetStarted />
      <JoinSection />
      <Footer />
      <Leva hidden />
    </>
  )
}
