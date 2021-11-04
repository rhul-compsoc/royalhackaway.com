import React, { useEffect, useState } from "react"
import { SiteButton } from "../SiteClickable"

interface Props {
  event_name?: string
  releases?: string
}

const TitoWidget = ({ event_name, releases }: Props) => {
  const [buttonLoaded, setButtonLoaded] = useState(false)

  useEffect(() => {
    const scriptElement = document.createElement("script")
    scriptElement.src = "https://js.tito.io/v2"
    let retryMountJavaScript, retryFormatButton

    const attemptReformatButton = () => {
      const titoButton = document.querySelector(".tito-widget-button")

      // If the Tito button exists, add the relevant styles
      if (titoButton) {
        titoButton.classList.add("btn")
        titoButton.classList.add("btn-hackaway-orange")

        // Switch to the Tito button
        setButtonLoaded(true)
      } else {
        // Check to see if the button is loaded in 10ms
        retryFormatButton = setTimeout(attemptReformatButton, 10)
      }
    }

    const attemptMountJavaScript = () => {
      // If the JavaScript tag has not been placed, put it in
      if (!document.body.contains(scriptElement)) {
        document.body.appendChild(scriptElement)
      }

      // When the JavaScript code is mounted, try to create a button
      if ("tito" in window) {
        window.tito("button.mount", {
          el: "#tito-widget",
          event: event_name,
          releases: releases,
        })

        // When the button is created, attempt to reformat the button
        attemptReformatButton()
      } else {
        // Check to see if Tito is back in 10ms
        retryMountJavaScript = setTimeout(attemptMountJavaScript, 10)
      }
    }

    // Start by attempting to mount the JavaScript
    attemptMountJavaScript()

    return () => {
      document.body.removeChild(scriptElement)
      clearTimeout(retryMountJavaScript)
      clearTimeout(retryFormatButton)
    }
  }, [])

  // Swap buttons on the fly!
  // If the Tito widget has not loaded yet,
  // display the button which brings them to the website
  // If the widget has loaded, display the created Tito button.
  return (
    <div>
      {!buttonLoaded && (
        <SiteButton
          href={`https://tito.io/${event_name}`}
          className="btn-hackaway-orange"
        >
          Tickets
        </SiteButton>
      )}
      <div className={!buttonLoaded && "d-none"}>
        <div id="tito-widget">Loading...</div>
      </div>
    </div>
  )
}

export { TitoWidget }
