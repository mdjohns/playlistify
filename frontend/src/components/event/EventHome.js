import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

const EventHome = () => {
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
        </div>
    )
}

export default EventHome;