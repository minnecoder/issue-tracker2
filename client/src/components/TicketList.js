import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom"
import TicketDetails from "./TicketDetails"


export default function TicketList() {
    let history = useHistory()
    const firstName = sessionStorage.getItem("firstName")
    const lastName = sessionStorage.getItem("lastName")
    const fullName = `${firstName} ${lastName}`


    const [tickets, updateTickets] = useState([])
    const [ticketIndex, updateticketIndex] = useState("0")

    useEffect(() => {
        async function fetchTickets() {
            const firstName = sessionStorage.getItem("firstName")
            const lastName = sessionStorage.getItem("lastName")
            const fullName = `${firstName} ${lastName}`
            const response = await fetch(`/api/v1/tickets/name/${fullName}`)
            const json = await response.json()
            updateTickets(json.data)
        }
        fetchTickets()
    }, [])

    const dateConverter = (dateTime) => {
        const date = dateTime.substr(0, 10).split("-")
        date.push(date.splice(0, 1)[0])
        return date.join("/")
    }

    return (
        <Wrapper>
            < div >
                <TableTitle>
                    <h3>Tickets for {fullName}</h3>
                    <button onClick={() => { history.push("/createtickets") }}>Create A Ticket</button>
                </TableTitle>

                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Created</th>
                            <th>Assigned Developer</th>
                            <th>Ticket Priority</th>
                            <th>Ticket Status</th>
                            <th>Ticket Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket, index) => (
                            <tr key={index} onClick={() => updateticketIndex(index)}>
                                <td>{ticket.title}</td>
                                <td>{dateConverter(ticket.createdOn)}</td>
                                <td>{ticket.assignedDev}</td>
                                <td>{ticket.ticketPriority}</td>
                                <td>{ticket.ticketStatus}</td>
                                <td>{ticket.ticketType}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

            </div>
            { !!tickets.length && <TicketDetails key={tickets._id} data={tickets[ticketIndex]} />}
        </Wrapper>
    );
}

const Wrapper = styled.div` 
display: flex;
flex: 1;
justify-content: space-between;
background: white;
grid-area: ticketarea;
height: calc(100vh - 4.25rem);
overflow-y: scroll;

@media only screen and  (max-width: 800px){
    flex-direction: column;
    table, thead, tbody, th, td, tr {
    display: block;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  tr { border: 1px solid #ccc; }
  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 200px;
    margin-left: 150px;
  }
  td:before {
    position: absolute;
    top: 12px;
    left: 6px;
    width: 200px;
    padding-right: 40px;
    white-space: nowrap;
    margin-left: -150px;
  }
  td:nth-of-type(1):before { content: "Title"; }
  td:nth-of-type(2):before { content: "Created"; }
  td:nth-of-type(3):before { content: "Assigned Developer"; }
  td:nth-of-type(4):before { content: "Ticket Priority";}
  td:nth-of-type(5):before {content: "Ticket Status"}
  td:nth-of-type(6):before {content: "Ticket Type"}
}

`

const Table = styled.table`
width: 100%;
border-collapse: collapse;

thead th {
    padding: 0.5rem;
    text-align: left;
    background: #e7f3fd;

}

td{
  padding: 0.5rem;
  text-align: left;
  border-bottom: solid 1px #EEE;

}

tr{
  ${'' /* height: 2rem; */}
}
tbody tr {
    cursor: pointer;
}
`

const TableTitle = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 1rem;

h3 {
    padding-top: .25rem; 
}
button {
      padding: .5rem;
      background: #eb7012;
      color: white;
      border-radius: 5px;
}
`;