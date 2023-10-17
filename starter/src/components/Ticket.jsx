import React from "react"

function Ticket(props) {

    return <>
        <h2>{props.name}</h2>
        <i>{props.filer}</i>
        <p>{props.description}</p>
    </>
}

export default Ticket;