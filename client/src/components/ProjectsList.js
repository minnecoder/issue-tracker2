import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import styled from "styled-components"

export default function ProjectsList() {
    let abortController = new AbortController()
    let history = useHistory()
    const [projects, updateProjects] = useState([])

    async function fetchProjects() {

        const response = await fetch("/api/v1/projects", { signal: abortController.signal })
        const json = await response.json()
        updateProjects(json.data)

    }

    useEffect(() => {
        // let isMounted = true
        fetchProjects()
        return () => {
            abortController.abort()
        }
    }, [])
    return (
        <div>
            <TableTitle>
                <h3>Projects</h3>
                <button onClick={() => history.push("/addproject")}>Add A Project</button>
            </TableTitle>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th># of Tickets</th>

                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.title} onClick={() => history.push({
                            pathname: "/projectticket",
                            state: { data: project }
                        })
                        }>
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>{project.tickets.length}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>)
}


const Table = styled.table`
grid-area: projectarea;
background: white;
border-collapse: collapse;
width: calc(100vw - 220px);

thead th {
    padding: 1rem;
    text-align: left;
    border-bottom: solid 1px #F8F8F8;
    background: #e7f3fd;
}
td{
  padding: 1rem;
  text-align: left;
  border-bottom: solid 1px #EEE;
}
tr{
    height: 2rem;
}

`

const TableTitle = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
h3 {
    padding-top: .25rem; 
}
button {
      padding: .5rem;
      background: #eb7012;
      color: white;
      border-radius: 5px;
}
`