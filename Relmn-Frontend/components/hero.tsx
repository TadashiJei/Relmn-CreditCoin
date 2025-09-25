"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">WEB3 SUPER APP</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Connecting <br />
          <i className="font-light">relationships</i>, money & networks
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[520px] mx-auto">
          The unified Web3 platform for real-world asset tokenization, DeFi lending, and satellite infrastructure. Built
          on Creditcoin for emerging markets.
        </p>

        <Link className="contents max-sm:hidden" href="/#get-started">
          <Button className="mt-14" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            [Get Started]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="/#get-started">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Get Started]
          </Button>
        </Link>
      </div>
    </div>
  )
}
