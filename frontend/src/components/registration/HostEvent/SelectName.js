import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

const JOIN_EVENT_URL = 'http://localhost:5000/event/join_event';

const submitForm = (e) => {
    e.preventDefault();

}
const SelectName = () => {
    const [name, setName] = useState("");
    const [joinCode, setJoinCode] = useState("");

    useEffect(() => {
        const qs = queryString.parse(window.location.search);
        if ('join_code' in qs) {
            setJoinCode(qs['join_code']);
            console.log(`join code : ${joinCode}`)
        }
    }, [joinCode])
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}></input>
            <button>Join Event</button>

            <label htmlFor="join_code">Join Code</label>
            <input type="text" id="join_code" value={joinCode} disabled />
        </form>
    )
}

export default SelectName;