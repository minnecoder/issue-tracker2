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
                <div className="inputGroup">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        value={state.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>

                <input type="submit" value="Register User" onClick={handleSubmit} />

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
  .inputGroup{
    display: flex;
    flex-direction: column;
    margin: .5rem 0;
  }
  label{
    margin-left: .75rem;
  }
  input {
    margin: .25rem .75rem;
    padding: .5rem;
    border-radius: 3px;
    border: 1px solid black;
  }
  input[type="submit"] {
    margin-top: .75rem;
    background: #eb7012;
    color: white;
    border-radius: 3px;
    border: none;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }
 
`;

