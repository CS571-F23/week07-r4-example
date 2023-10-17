import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap";
import Ticket from "./Ticket";
import { useRef } from "react";

export default function TicketBoard(props) {

    const nameRef = useRef();
    const descriptionRef = useRef();

    const [tickets, setTickets] = useState([]);

    const loadTickets = () => {
        fetch('https://cs571.org/api/f23/weekly/week07', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
            .then(res => res.json())
            .then(data => {
                setTickets(data);
            })
    }

    useEffect(loadTickets, [])

    const createTicket = () => {
        fetch('https://cs571.org/api/f23/weekly/week07', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": CS571.getBadgerId()
            },
            body: JSON.stringify({
                name: nameRef.current.value,
                description: descriptionRef.current.value
            })
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error()
            }
        }).then(json => {
            console.log("Recieved back...");
            console.log(json);
            alert('Successfully made ticket!')
            loadTickets();
        }).catch(e => {
            alert('An error occured while making the request')
        })
    }

    return <div>
        <h1>Ticket Board</h1>
        <p>Create a ticket using the form below...</p>
        {
            <Form>
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control id="title" ref={nameRef}/>
                <Form.Label htmlFor="content">Content</Form.Label>
                <Form.Control id="content" ref={descriptionRef}/>
            </Form>
        }
        <Button onClick={createTicket} style={{marginTop: "1rem"}}>Create a Ticket</Button>
        <hr/>
        {
            tickets.map(t => <Ticket key={t.id} {...t}/>)
        }
    </div>
}