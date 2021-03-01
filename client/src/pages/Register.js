import React, { useState } from 'react'
import { useHistory } from "react-router"
import styled from "styled-components";


export default function Login() {
    const history = useHistory()
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: "",

    })
    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        event.preventDefault()
    }

    function handleSubmit(event) {

        event.preventDefault()
        fetch("/api/v1/users/add", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                password: state.password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (Object.prototype.hasOwnProperty.call(data, "error")) {
                    setState({
                        error: data.error,
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: ""
                    });

                }
                if (Object.prototype.hasOwnProperty.call(data, "token")) {
                    sessionStorage.setItem("token", data.token);
                    sessionStorage.setItem("First Name", data.firstName);
                    sessionStorage.setItem("Last Name", data.lastName);

                    history.push("/tickets");
                }
            });
    }
    return (
        <LoginWrapper>
            <LoginForm onSubmit={handleSubmit}>
                <h1>Delivery Notes</h1>
                <h4>{state.error}</h4>
                <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={state.firstName}
                    onChange={handleChange}
                />
                <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={state.lastName}
                    onChange={handleChange}
                />

                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={state.email}
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />

                <input type="submit" value="Submit" onClick={handleSubmit} />

            </LoginForm>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`
background:#128DEB;
height: 100vh;
width: 100%;

`

const LoginForm = styled.form`
    position: absolute;
    top: 10%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    background: white;
    width: 30rem;
    padding: 2rem 0;
    border-radius: 10px;
  
  h1{
    text-align: center;
    color: #0d62a4;
    padding-bottom: .5rem;  
  }

  h4{
      color: red;
  }
  
  input {
    width: 20rem;
    margin: 0.5rem 0;
    padding: 1rem 0;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input[type="submit"] {
      margin-top: .75rem;
    width: 5rem;
    background: #eb7012;
    color: white;
  }
 
`;

