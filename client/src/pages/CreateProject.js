import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar"
import AddProjectComponent from "../components/AddProjectComponent"

export default function Projects() {
    return (
        <div>
            <Main>
                <Header />
                <Sidebar />
                <AddProjectComponent />
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
"sidebar projectarea projectarea";
grid-gap: 0;
background: white;
`;
