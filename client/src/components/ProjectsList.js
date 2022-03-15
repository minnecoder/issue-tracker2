import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function ProjectList2() {
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
        <Main>
            <Title>
                <h2>Projects</h2>
                <button onClick={() => history.push("/addproject")}>Add A Project</button>
            </Title>
            <DataTitles>
                <p>Title</p>
                <p>Description</p>
                <p># of Tickets</p>
            </DataTitles>
            <DataItems>
                {projects.map((project) => (
                    <DataItem key={project.title} onClick={() => history.push({
                        pathname: "/projectticket",
                        state: { data: project }
                    })
                    }>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                        <p>{project.tickets.length}</p>
                    </DataItem>
                ))}
            </DataItems>
        </Main>
    )
}

const Main = styled.div`
width: calc(100vw - 150px);
background: #F8F8FE;
`

const Title = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
h2 {
    padding: .5rem 0 0 8rem; 
}
button {
    padding: .5rem;
    background: #eb7012;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1 px 9px 0px rgba(187,186,196,1);
}
`

const DataTitles = styled.div`
width: 80%;
margin: 0 auto;
display:flex ;
height: 3rem;
border-radius: 20px;
align-items: center;
justify-content: space-between;
padding: 0 1rem 0 1rem;

p {
    color: #968AAF;
}

p:nth-of-type(2) {
    padding-left: 5rem;
}
`

const DataItems = styled.div`

`

const DataItem = styled.div`
width: 80%;
margin: 1rem auto;
display: flex;
height: 3rem;
cursor: pointer;
align-items: center;
justify-content: space-between;
padding: 0 1rem 0 1rem;
background: white;
border-radius: 20px;
box-shadow: 1px 1px 9px 0px rgba(187,186,196,1);
`