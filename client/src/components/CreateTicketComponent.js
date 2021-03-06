import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components"

export default function CreateTicket() {
    let history = useHistory()
    const [projects, setProjects] = useState([])
    const [state, setState] = useState({
        project: "",
        title: "",
        description: "",
        ticketType: "",
        ticketPriority: "",
        user: ""
    })

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch("/api/v1/projects/dropdown")
            const json = await response.json()
            const data = json.data
            data.unshift({ _id: 0, title: "-" })
            setProjects(json.data)
        }
        fetchProjects()
    }, [])

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const firstName = sessionStorage.getItem("firstName")
        const lastName = sessionStorage.getItem("lastName")
        const fullName = `${firstName} ${lastName}`
        if (sessionStorage.getItem("demo") !== null) {
            await fetch("/api/v1/tickets", {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    project: state.project,
                    title: state.title,
                    description: state.description,
                    assignedDev: fullName,
                    submitter: fullName,
                    ticketPriority: state.ticketPriority,
                    ticketType: state.ticketType
                })
            })
        }
        history.push("/tickets")
    }


    return (
        <Wrapper>

            <button className="closeBtn" onClick={() => { history.push("/tickets") }}>Close X</button>
            <h1>Create A Ticket</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Project
                        <select
                        name="project"
                        value={state.project}
                        onChange={handleChange}
                    >
                        {projects.map((project, _id) => (
                            < option key={project._id} value={project.title} >  { project.title}</option>
                        ))}
                    </select>
                </label>
                <input
                    name="title"
                    type="text"
                    value={state.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <input
                    name="description"
                    type="text"
                    value={state.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <label>
                    Ticket Priority
                        <select
                        name="ticketPriority"
                        value={state.ticketPriority}
                        onChange={handleChange}>
                        <option value="">-</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Highest">Highest</option>
                    </select>
                </label>
                <label>
                    Ticket Type
                        <select
                        name="ticketType"
                        value={state.ticketType}
                        onChange={handleChange}>
                        <option value="">-</option>
                        <option value="Bug">Bug</option>
                        <option value="New Feature">New Feature</option>
                        <option value="Improvement">Improvement</option>
                        <option value="Task">Task</option>
                        <option value="Testing">Testing</option>
                    </select>
                </label>
                <button onClick={handleSubmit} className="submitBtn">Submit</button>
            </form>



        </Wrapper>
    )
}

const Wrapper = styled.div` 
position: absolute;
top: 15%;
left: 14%;
width: 80%;
height: 80%;
background:#128DEB;
border-radius: 10px;

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:800px) {
    margin: 1rem;

    }
}

h1 {
    font-size: 2.5rem;
    text-align: center;
    padding:  .5rem 0;
    margin-top: .5rem;
    color: white;
    @media (max-width: 650px) {
        font-size: 1.5rem;
        text-align:left;
        margin-left: 1rem;
    }
}
label{
    color: white;
}

input[type=text]{
    width: 50%;
    padding: 1.5rem;
    margin: .75rem;
}

select{
    padding: 1.5rem;
    margin: .5rem;
}

.submitBtn{
    width: 8rem;
    padding: 1.5rem;
    margin: .5rem;
    background: #EB7012;
    color: white;
    border-radius: 5px;
}
.closeBtn{
    background: #EB7012;
    border-radius: 5px;
    padding: 1rem;
    margin: .5rem;
    position: absolute;
    top: 10px;
    right: 15px;
    color: white;
    @media (max-width: 800px) {
        top: 2px;
        right: 2px;
    }
}
`