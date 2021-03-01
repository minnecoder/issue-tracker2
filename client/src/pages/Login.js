import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
    let history = useHistory()
    const [state, setState] = useState({
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

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await fetch("/api/v1/users/login", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: state.email,
                password: state.password
            }),
        })
        if (response.status === 400) {
            const json = await response.json()
            setState({
                error: json.error,
                email: "",
                password: ""
            })
        }
        if (response.status === 200) {
            const json = await response.json()
            sessionStorage.setItem("token", json.token);
            sessionStorage.setItem("firstName", json.firstName);
            sessionStorage.setItem("lastName", json.lastName);
            history.push("/tickets");
        }
    }
    return (
        <LoginWrapper>
            <LoginForm onSubmit={handleSubmit}>
                <h1>Issue Tracker</h1>
                <h4>{state.error}</h4>
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

                <input type="submit" value="Submit" />
                <div className="loginLinks">
                    <p>
                        Don't have an account?<Link to="/register"> Register User</Link>
                    </p>
                    <p>
                        Login as a Demo User <Link to="/demo"> Click Here</Link>
                    </p>
                </div>
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
  border: 1px solid black;
  }
  input[type="submit"] {
      margin-top: .75rem;
    width: 5rem;
    background: #eb7012;
    color: white;
  }
  .loginLinks {
      padding: .5rem 0;
  }
  .loginLinks p {
      padding: .25rem 0;
  }
`;

