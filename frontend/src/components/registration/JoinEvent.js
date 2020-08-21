import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

const JOIN_EVENT_URL = 'http://localhost:5000/event/join_event';




const JoinEvent = (props) => {
  const [name, setName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const qs = queryString.parse(window.location.search)


    if ('join_code' in qs) {
      setJoinCode(qs['join_code']);
      console.log(`join code : ${joinCode}`)
    }

  }, [joinCode])


  const joinEvent = (e) => {
    e.preventDefault();
    fetch(JOIN_EVENT_URL, {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          name: name,
          join_code: joinCode
        })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "success") {
          const qs = queryString.stringify({
            "name": data.name,
            "join_code": data.join_code
          })
          props.history.push(`/event?` + qs);
        }
      })

  }



  return (
    <div>
      <form onSubmit={joinEvent}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}></input>
        <label htmlFor="join_code">Join Code</label>
        <input type="text" id="join_code" value={joinCode} onChange={e => setJoinCode(e.target.value)}></input>

        <button>Join Event</button>
      </form>
    </div>
  )
};

export default withRouter(JoinEvent);
