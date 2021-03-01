import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TicketList from '../components/TicketList';

export default function Tickets() {
  return (
    <div>
      <Main>
        <Header />
        <Sidebar />
        <TicketList />
      </Main>
    </div>
  );
}

const Main = styled.div`
display: grid;
grid-template-columns: 130px 1fr 1fr;
grid-template-rows: 65px 1fr;
grid-template-areas:
"header header header"
"sidebar ticketarea ticketarea";
grid-gap: 0;
`;