import React, { createContext } from "react"

const EventContext = createContext(undefined)

const EventContextProvider = ({ children, data }) => (
  <EventContext.Provider value={data}>{children}</EventContext.Provider>
)

export { EventContext, EventContextProvider }
