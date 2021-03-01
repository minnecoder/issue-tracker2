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
                <p>Top Projects</p>

                <ul>
                    {projects.map(project => (
                        <li key={project._id}>{project.title}</li>
                    ))}
                </ul>
            </div>
            <div className="row">
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
            <div className="row">
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
.projects{
    p{
        font-size: 1.5rem;
        font-weight: bold;
    }
    li {
        padding: .5rem 0;
    }
   
}

.row {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
    }

    .dashboardItem{
        width: 15vw;
        height: 15vh;
        margin: 0 1rem;
        ${'' /* padding: 2rem; */}
        background: green;
        p{
            color: white;
        }
        h1{
            text-align: center;
            color: white;
        }
    }
` 