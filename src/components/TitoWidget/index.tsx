import React from "react"

interface Props {
    event_name?: string
    releases?: string
}

const TitoWidget = ({ event_name, releases }: Props) => {
    return (
        <div>
            <script src='https://js.tito.io/v2' async></script> 
            <tito-widget event={event_name} releases={releases}>Loading...</tito-widget>
        </div>
    )
}

export { TitoWidget }
