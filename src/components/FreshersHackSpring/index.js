import React, { useEffect, useState } from "react"
import { background, letters } from "./index.module.scss"

const getCurvePosition = pos => {
  if (pos > Math.PI * 2) {
    return 0
  } else {
    return (Math.cos(pos) - 1) * 2
  }
}

const FreshersHackSpring = ({ style }) => {
  const LETTERS = "fresher's hack".split("")

  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(frame + 0.15)
    }, 10)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className={background} style={style}>
      {LETTERS.map((letter, index) => (
        <span
          key={index}
          className={letters}
          style={{
            transform: `translateY(${getCurvePosition(
              (frame + index) % 20
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
