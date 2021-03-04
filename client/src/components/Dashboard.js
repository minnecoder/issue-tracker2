import React, { useState, useEffect } from 'react'
import styled from "styled-components"

export default function Dashboard() {
    const [data, setData] = useState({})
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/v1/dashboard')
            const json = await response.json()
            setData(json.data)
            setProjects(json.data.projects)
        }
        fetchData()
    }, [])

    return (
        <Wrapper>
            <div className="projects">
                <p>Top 10 Projects</p>

                <ul>
                    {projects.map(project => (
                        <li key={project._id}>{project.title}</li>
                    ))}
                </ul>
            </div>
            <div className="row1">
                <div className="dashboardItem">
                    <p>Number of Tickets</p>
                    <h1>{data.ticketNum}</h1>
                </div>
                <div className="dashboardItem">
                    <p>Bug Tickets</p>
                    <h1>{data.ticketsBug}</h1>
                </div>
                <div className="dashboardItem">
                    <p>Open Tickets</p>
                    <h1>{data.ticketsOpen}</h1>
                </div>
            </div>
            <div className="row2">
                <div className="dashboardItem">
                    <p>Tickets In Progress</p>
                    <h1>{data.ticketsInProgress}</h1>
                </div>
                <div className="dashboardItem">
                    <p>Highest Priority Tickets</p>
                    <h1>{data.ticketsHighest}</h1>
                </div>
                <div className="dashboardItem">
                    <p>High Priority Tickets</p>
                    <h1>{data.ticketsHigh}</h1>
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "projects row1"
    "projects row2";
    width: 80vw;

.projects{
    grid-area: projects;
    width: 20vw;
    margin: 2rem 0.5rem 2rem 1.5rem;
    border-radius: 10px;
    background: #128DEB;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    p{
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        padding: 1rem 0;
        color: white;
    }
    li {
        color: white;
        padding: 1rem 0;
        text-align: center;
        font-size: 1rem;
    }
   
}

.row1 {
    grid-area: row1;
    display: flex;
    justify-content: space-between;
    ${'' /* margin: 1rem; */}
    margin: 5rem 1rem 1rem 1rem;
    width: 90%;
    ${'' /* justify-content: center; */}
    }
.row2 {
    grid-area: row2;
    display: flex;
    justify-content: space-between;
    ${'' /* margin: 1rem; */}
    margin: 1rem 1rem 1rem 1rem;
    width: 90%;
    ${'' /* justify-content: center; */}
}

.dashboardItem{
    width: 22vw;
    height: 26vh;
    margin: 0 1rem;
    ${'' /* padding: 2rem; */}
    background: #128DEB;
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    p{
        color: white;
        font-size: 1.5rem;
        text-align: center;
        padding-top: 1rem;
    }
    h1{
        text-align: center;
        color: white;
        font-size: 6rem;
        padding-top: 1rem;
    }
}
` 