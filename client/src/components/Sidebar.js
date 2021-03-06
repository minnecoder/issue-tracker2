import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Sidebar() {
    return (
        <Main>
            <ul>
                <li><SidebarLink to="/dashboard">Dashboard</SidebarLink></li>
                <li><SidebarLink to="/projects">Projects</SidebarLink></li>
                <li><SidebarLink to="/tickets">My Tickets</SidebarLink></li>
                {/* <li><SidebarLink to="/manageroles">Manage Roles</SidebarLink></li>
                <li><SidebarLink to="/manageusers">Manage Users</SidebarLink></li> */}
            </ul>
        </Main>
    );
}

const Main = styled.div`
grid-area: sidebar;
height: calc(100vh - 65px);
width: 130px;
background: #a0d1f7;
border-right: solid 1px #ddd;
ul {
    margin-left: 1rem;
   height: 100%
}
li {
padding: 1rem 0;
justify-content: space-between;
}
@media (max-width: 800px) {
    height: 3rem;
    width: 100%;
    ul {
        display: flex;
        justify-content: space-around;
    }
    li {
padding: 1rem 0;

}
}
`;

const SidebarLink = styled(Link)`
color: white;
font-weight:600;
`;