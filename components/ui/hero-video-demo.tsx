"use client"

import React from "react"
import { HeroVideoDialog } from "./hero-video-dialog"

const animationStyles = [
  "from-bottom",
  "from-center",
  "from-top",
  "from-left",
  "from-right",
  "fade",
  "top-in-bottom-out",
  "left-in-right-out",
] as const

export function HeroVideoDialogDemo() {
  const [selectedAnimation, setSelectedAnimation] = React.useState<(typeof animationStyles)[number]>("from-center")

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {animationStyles.map((style) => (
          <button
            key={style}
            onClick={() => setSelectedAnimation(style)}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedAnimation === style
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {style}
          </button>
        ))}
      </div>
      
      <div className="w-full max-w-3xl mx-auto">
        <HeroVideoDialog
          videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
          thumbnailSrc="/images/drone.webp"
          thumbnailAlt="Demo video thumbnail"
          animationStyle={selectedAnimation}
        />
      </div>
    </div>
  )
}
