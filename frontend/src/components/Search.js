import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
    return (
        <>
            <label htmlFor="input">{props.name}</label>
            <input type="text" value={props.inputValue} onChange={(e) => props.handleInput(e.target.value)} />
        </>
    )
}

Search.propTypes = {
    name: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired
}
export default Search;