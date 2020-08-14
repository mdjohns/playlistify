import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h2>Playlistify</h2>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Nav;
