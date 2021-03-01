import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function ManageRoles() {
  return (
    <div>
      <Main>
        <Header />
        <Sidebar />
        <h1>ManageRoles</h1>
      </Main>
    </div>
  );
}

const Main = styled.div`
display: grid;
grid-template-columns: 150px 1fr 1fr;
grid-template-rows: 65px 1fr;
grid-template-areas:
"header header header"
"sidebar managerole managerole";
grid-gap: 0;
background: white;
`;
