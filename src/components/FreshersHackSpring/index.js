import React, { useEffect, useState } from "react"
import { background, letters } from "./index.module.scss"

import letterImage from "./letters.png"

const getCurvePosition = (frameCounter, letterPosition, clamp) => {
  let x = (frameCounter - letterPosition) % clamp

  if (x > Math.PI * 2) {
    return 0
  } else {
    return (Math.cos(x) - 1) * 3
  }
}

const FreshersHackSpring = ({ style }) => {
  const LETTERS = "fresher's hack".split("")

  const [frameCounter, setFrame] = useState(25)

  useEffect(() => {
    const animate = () => {
      setFrame(Date.now() / 100)
    }

    const interval = requestAnimationFrame(animate, 10)

    return () => {
      cancelAnimationFrame(interval)
    }
  })

  return (
    <div className={background} style={style}>
      <img
        src={letterImage}
        className={letters}
        style={{
          transform: `translateY(${getCurvePosition(frameCounter, 0, 20)}px)`,
        }}
      />
    </div>
  )
}

export { FreshersHackSpring }
