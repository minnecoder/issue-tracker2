import React, { useState } from 'react'
import TicketNotes from "./TicketNotes"
import styled from "styled-components"
import { FaEdit } from 'react-icons/fa';

export default function TicketDetails({ data, index }) {
  const [isEdited, setIsEdited] = useState(false)
  const [state, setState] = useState({
    ticketPriority: "",
    ticketType: "",
    ticketStatus: "",
    ticketComment: ""
  })

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const arr = []
    const firstName = sessionStorage.getItem("firstName")
    const lastName = sessionStorage.getItem("lastName")
    const fullName = `${firstName} ${lastName}`
    // verify if each input is different
    // if an input is different add object of data to an array
    if (data.ticketType !== state.ticketType && state.ticketType !== "") {
      arr.push({
        user: fullName,
        propertyChanged: "Ticket Type",
        property: "ticketType",
        oldValue: data.ticketType,
        newValue: state.ticketType
      })
    }
    if (data.ticketStatus !== state.ticketStatus && state.ticketStatus !== "") {
      arr.push({
        user: fullName,
        propertyChanged: "Ticket Status",
        property: "ticketStatus",
        oldValue: data.ticketStatus,
        newValue: state.ticketStatus
      })
    }
    if (data.ticketPriority !== state.ticketPriority && state.ticketPriority !== "") {
      arr.push({
        user: fullName,
        propertyChanged: "Ticket Priority",
        property: "ticketPriority",
        oldValue: data.ticketPriority,
        newValue: state.ticketPriority
      })
    }
    // iterate through array of objects and send each item to API end point
    for (let i = 0; i < arr.length; i++) {
      await fetch("/api/v1/tickethistory", {
        method: "PUT",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: data._id,
          user: arr[i].user,
          propertyChanged: arr[i].propertyChanged,
          property: arr[i].property,
          oldValue: arr[i].oldValue,
          newValue: arr[i].newValue
        })
      })
    }
    // after complettion set isEdited to false
    setIsEdited(false)
    window.location.reload()

  }

  async function submitComment() {
    const firstName = sessionStorage.getItem("firstName")
    const lastName = sessionStorage.getItem("lastName")
    const fullName = `${firstName} ${lastName}`
    await fetch("/api/v1/ticketcomment", {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: data._id,
        user: fullName,
        comment: state.ticketComment
      })
    })
    setState({ ticketComment: "" })
    window.location.reload()
  }

  function toggleEdited() {
    if (isEdited) {
      setIsEdited(false)
    } else {
      setIsEdited(true)
    }
  }

  return (
    <Wrapper>
      <div className="ticketInfo" key={index}>
        <div className="ticketTitle">
          <h2>{data.title}</h2>
          <span onClick={toggleEdited}>
            <FaEdit style={{ marginTop: ".25rem" }} />
          Edit
          </span>
        </div>
        <div className="info">
          <div>
            <section className="infoItem">
              <p>Assigned To</p>
              <p>{data.assignedDev}</p>
            </section>
            <section className="infoItem">
              <p>Created By</p>
              <p>{data.submitter}</p>
            </section>
          </div>

          {isEdited ?
            <div>
              <section className="infoItem">
                <p>Type</p>
                <select
                  name="ticketType"
                  value={state.ticketType}
                  onChange={handleChange}
                >
                  <option value="">-</option>
                  <option value="Bug">Bug</option>
                  <option value="New Feature">New Feature</option>
                  <option value="Improvement">Improvement</option>
                  <option value="Task">Task</option>
                  <option value="Testing">Testing</option>
                </select>
              </section>
              <section className="infoItem">
                <p>Status</p>
                <select
                  name="ticketStatus"
                  value={state.ticketStatus}
                  onChange={handleChange}
                >
                  <option value="">-</option>
                  <option value="Open">Open</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                  <option value="Reopened">Reopened</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </section>
              <section className="infoItem">
                <p>Priority</p>
                <select
                  name="ticketPriority"
                  value={state.ticketPriority}
                  onChange={handleChange}
                >
                  <option value="">-</option>
                  <option value="Lowest">Lowest</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Highest">Highest</option>
                </select>
              </section>
              <button onClick={handleSubmit} className="submitBtn">Submit</button>
            </div>
            :
            <div>
              <section className="infoItem">
                <p>Type</p>
                <p>{data.ticketType}</p>
              </section>
              <section className="infoItem">
                <p>Status</p>
                <p>{data.ticketStatus}</p>
              </section>
              <section className="infoItem">
                <p>Priority</p>
                <p>{data.ticketPriority}</p>
              </section>
            </div>
          }
        </div>

        <p className="description">{data.description}</p>
      </div >
      <TicketNotes data={data} />
      <div className="ticketComment">
        <textarea name="ticketComment" value={state.ticketComment} onChange={handleChange} cols="30" rows="10" />
        <button onClick={submitComment} type="submit">Submit</button>
      </div>
    </Wrapper>)
}



const Wrapper = styled.div`
background: white;
border-left: 1px solid #ccc;

.ticketTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: .5rem;
  h2{
    margin-left: .25rem;
  }
  span{
    cursor: pointer;
    margin-right: 2rem; 
    padding: .5rem;
    color: white;
    background: #EB7012;
    border-radius: 5px;
  }
}

.description{
  padding-top: .5rem;
}
.infoItem{
  ${'' /* margin: .5rem 0; */}
  padding: .5rem;
  
 p:nth-child(1) {
   text-transform: uppercase;
   color: #ABB1B6;
   font-weight: 500;
   padding-bottom: .25rem;
 }
}
.info{
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  border-bottom: solid 1px #ddd;
  margin: 0 1rem;
  div{
    display: flex;
    justify-content: space-between;
  }
  select{
    border: 1px solid black;
  }
  .submitBtn{
    width: 8rem;
    padding: .5rem;
    margin: .5rem;
    background: #EB7012;
    color: white;
    border-radius: 5px;
}
}
.ticketInfo{
  margin: .5rem;
  h2{
  padding: 0.5rem 0;
  }
}

.ticketComment {
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 0 1rem ;

input[type=text] {
  
  height: 5rem;
  border: solid 1px black;
}

textarea {
  border: solid 1px black;
}

button {
  margin-top: .5rem;
  padding: .5rem;
  width: 6rem;
  background: #EB7012;
  color: white;
  border-radius: 5px;
}
}
`