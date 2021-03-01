import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function TicketTable() {
  const [tickets, updateTickets] = useState([])
  useEffect(() => {
    async function fetchTickets() {
      const response = await fetch("/api/v1/tickets")
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
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Created</th>
          <th>Assigned Developer</th>
          <th>Submitter</th>
          <th>Ticket Priority</th>
          <th>Ticket Status</th>
          <th>Ticket Type</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket._id}>
            <td>{ticket.title}</td>
            <td>{ticket.description}</td>
            <td>{dateConverter(ticket.createdOn)}</td>
            <td>{ticket.assignedDev}</td>
            <td>{ticket.submitter}</td>
            <td>{ticket.ticketPriority}</td>
            <td>{ticket.ticketStatus}</td>
            <td>{ticket.ticketType}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
margin: 2rem auto;
${'' /* padding-top: 2rem; */}
width: 90%;
border-collapse: collapse;

thead th {
    padding: 0.5rem;
    text-align: left;
    border-bottom: solid 1px #F8F8F8;
    background: #E0E5E9;
}

td{
  padding: 0.5rem;
  text-align: left;
  border-bottom: solid 1px #EEE;
}
tr{
  height: 2rem;
}
`;
