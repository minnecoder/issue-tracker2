import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineDashboard, AiOutlineProject } from "react-icons/ai"
import { IoTicketOutline } from "react-icons/io5"

export default function Sidebar() {
    return (
        <Main>
            <ul>
                <li>
                    <SidebarLink to="/dashboard">
                        <AiOutlineDashboard style={{ color: "white", fontSize: "2rem" }} />
                        Dashboard
                    </SidebarLink></li>
                <li>
                    <SidebarLink to="/projects">
                        <AiOutlineProject style={{ color: "white", fontSize: "2rem" }} />
                        Projects
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink to="/tickets">
                        <IoTicketOutline style={{ color: "white", fontSize: "2rem" }} />
                        My Tickets
                    </SidebarLink></li>
                {/* <li><SidebarLink to="/manageroles">Manage Roles</SidebarLink></li>
                <li><SidebarLink to="/manageusers">Manage Users</SidebarLink></li> */}
            </ul>
        </Main>
    );
}

const Main = styled.div`
grid-area: sidebar;
height: calc(100vh - 65px);
${'' /* width: 130px; */}
background: #372952;
border-right: solid 1px #ddd;
ul {
    margin-left: 1rem;
   height: 100%
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
display: flex;
    flex-direction: column;
    align-items: center;
padding: 1rem 0;
justify-content: space-between;
`;