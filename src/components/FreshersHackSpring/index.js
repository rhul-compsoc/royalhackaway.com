import React, { useEffect, useState } from "react"
import { background, letters } from "./index.module.scss"

const getCurvePosition = (frameCounter, letterPosition, clamp) => {
  let x = (frameCounter - letterPosition) % clamp

  if (x > Math.PI * 2) {
    return 0
  } else {
    return (Math.cos(x) - 1) * 2
  }
}

const FreshersHackSpring = ({ style }) => {
  const LETTERS = "fresher's hack".split("")

  const [frameCounter, setFrame] = useState(25)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(frameCounter + 0.15)
    }, 10)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className={background} style={style}>
      {LETTERS.map((letter, letterPosition) => (
        <span
          key={letterPosition}
          className={letters}
          style={{
            transform: `translateY(${getCurvePosition(
              frameCounter,
              letterPosition,
              20
            )}px)`,
            width: letter === " " && "0.25em",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  )
}

export { FreshersHackSpring }
