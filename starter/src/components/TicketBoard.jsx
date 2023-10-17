import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import Ticket from "./Ticket";

export default function TicketBoard(props) {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('https://cs571.org/api/f23/weekly/week07', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
            .then(res => res.json())
            .then(data => {
                setTickets(data);
            })
    }, [])

    const createTicket = () => {
        // TODO: Make a POST to https://cs571.org/api/f23/weekly/week07
        // Request body must have a 'name' and a 'description'
    }

    return <div>
        <h1>Ticket Board</h1>
        <p>Create a ticket using the form below...</p>
        {
            /* TODO Create fields for input values of a ticket name and a ticket body. */
        }
        <Button onClick={createTicket}>Create a Ticket</Button>
        <hr/>
        {
            tickets.map(t => <Ticket key={t.id} {...t}/>)
        }
    </div>
}