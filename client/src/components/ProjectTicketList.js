import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom"
import TicketDetails from "./TicketDetails"


export default function ProjectTicketList() {

    let history = useHistory()
    const passedData = history.location.state.data
    const [tickets, updateTickets] = useState([])
    const [ticketIndex, updateticketIndex] = useState("0")

    useEffect(() => updateTickets(passedData.tickets), [passedData])

    const dateConverter = (dateTime) => {
        const date = dateTime.substr(0, 10).split("-")
        date.push(date.splice(0, 1)[0])
        return date.join("/")
    }

    return (
        <Wrapper>
            < div >
                <TableTitle>
                    <h3>Tickets for {passedData.title}</h3>
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
td:nth-child(1) {
    max-width: 400px;
    white-space: nowrap;
  overflow: hidden;
    text-overflow: ellipsis;
}
tr{
  height: 2rem;
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