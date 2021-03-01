import React from 'react';
import styled from 'styled-components';
import DateDiff from "../helpers/DateDiff"

export default function TicketNotes(data) {
  const notes = []
  for (let i = 0; i < data.data.ticketComment.length; i++) {
    notes.push(data.data.ticketComment[i])
  }
  for (let i = 0; i < data.data.ticketHistory.length; i++) {
    notes.push(data.data.ticketHistory[i])
  }
  notes.sort((a, b) => {
    let da = new Date(a.created)
    let db = new Date(b.created)
    return da - db
  })


  return (
    <div>
      {notes
        .map((note => {
          if ('comment' in note) {
            return (
              <TicketComment key={note._id}>
                <div>
                  {note.user}
                  {' '}
                  commented
                  {' '}
                  <span>

                    {DateDiff(
                      note.created
                    )}
                  </span>
                </div>
                <p>
                  {note.comment}
                </p>
              </TicketComment>
            );
          }
          if ('oldValue' in note) {
            return (
              <TicketChange key={note._id}>
                <p>
                  {note.user}
                  {' '}
                  changed
                  {' '}
                  {note.propertyChanged}
                  {' '}
                  from
                  {' '}
                  {note.oldValue}
                  {' '}
                  to
                  {' '}
                  {note.newValue}
                  <span>
                    {DateDiff(
                      note.created,
                    )}
                  </span>
                </p>

              </TicketChange>
            );
          }
          return null;
        }))}
    </div>

  );
}

const TicketChange = styled.div`
display: flex;
justify-content: space-between;
background: #E7F3FD;
margin: .5rem;
padding: .5rem;

span {
  padding-top: .25rem;
  padding-left: .25rem;
    font-size: 12px;
    color: #B2B9BE; 
}
`;

const TicketComment = styled.div`
display: flex;
flex-direction: column;
padding: .5rem;

div {
   
    padding: .5rem;
    background: #E7F3FD;
}
span {
  padding-top: .25rem;
    font-size: 12px;
    color: #B2B9BE; 
}
p {
    margin-top: .25rem;
    padding: .75rem;
    border-left: solid 1px #ccc;
}
`;
