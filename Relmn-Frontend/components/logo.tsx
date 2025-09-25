import type React from "react"
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="28" fill="white" fontSize="24" fontFamily="var(--font-sentient), sans-serif" fontWeight="300">
        RELMN
      </text>
      <circle cx="100" cy="20" r="3" fill="#FFC700" className="animate-pulse" />
    </svg>
  )
}
