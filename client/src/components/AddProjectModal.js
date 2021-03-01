import React, { useState } from 'react'
import ReactDOM from "react-dom"
import { useHistory } from "react-router-dom"
import styled from "styled-components"


export default function AddProjectModal(props) {
    let history = useHistory()
    const [state, setState] = useState({
        title: "",
        description: "",
    })
    function handleChange(event) {
        console.log(event.target)
        // console.log(event.target.value)
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        // event.preventDefault()
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await fetch("api/v1/projects", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: state.title,
                description: state.description
            })
        })
        history.push("/projects")
        closeModal()
    }


    const { closeModal } = props
    const modal = (
        <>
            <Overlay />
            <ModalWrapper >
                <button className="closeBtn" onClick={closeModal}>X</button>
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

            </ModalWrapper>
        </>
    )
    return ReactDOM.createPortal(modal, document.getElementById("portal"))
}

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, .6);
-webkit-backdrop-filter: blur(2px);
backdrop-filter: blur(2px);
 
`
const ModalWrapper = styled.div` 
position: absolute;
top: 10%;
left: 25%;
width: 30rem;
height: 15rem;
background:#128DEB;
border-radius: 10px;

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    text-align: center;
    padding:  .5rem 0;
    margin-top: .5rem;
    color: white;
}
label{
    color: white;
}

input[type=text]{
    width: 50%;
    padding: .5rem;
    margin: .25rem;
}

select{
    padding: .5rem;
    margin: .25rem;
}

.submitBtn{
    width: 8rem;
    padding: .5rem;
    margin: .5rem;
    background: #EB7012;
    color: white;
    border-radius: 5px;
}
.closeBtn{
    position: absolute;
    top: 10px;
    right: 15px;
    background:#128DEB;
    color: white;
}
`