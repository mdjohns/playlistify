import React, { useState, useEffect } from 'react';
import Search from '../Search';
import queryString from 'query-string';

const EventHome = (props) => {
    const [name, setName] = useState("name");
    const [joinCode, setJoinCode] = useState("");

    useEffect(() => {
        const qs = queryString.parse(window.location.search);

        if ('join_code' in qs) {
            setJoinCode(qs['join_code'])
        }
        if ('name' in qs) {
            setName(qs['name']);
        }
    }, [joinCode, name])
    return (
        <div>
            <h3>Event</h3>
            <pre>Hi, {name}</pre>
            <pre>Welcome to {joinCode}</pre>
            <Search name={"Find a Song!"} inputValue={name} handleInput={setName} />
        </div>
    )
}

export default EventHome;