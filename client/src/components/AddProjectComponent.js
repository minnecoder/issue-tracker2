import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import styled from "styled-components"

export default function AddProjectComponent() {
    let history = useHistory()
    const [state, setState] = useState({
        title: "",
        description: "",
    })
    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if (sessionStorage.getItem("demo") !== null) {
            await fetch("api/v1/projects", {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: state.title,
                    description: state.description
                })
            })
        }
        history.push("/projects")
    }

    return (
        <Wrapper >
            <button className="closeBtn" onClick={() => history.push("/projects")} > Close</button>
            <h1>Add Project</h1>
            <form onSubmit={handleSubmit}>
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
@media (max-width:800px) {
    height: auto;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 2.5rem;
    text-align: center;
    padding:  .5rem 0;
    margin-top: 5rem;
    color: white;
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
}
`