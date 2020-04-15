import React from 'react';
import { useLocation } from 'react-router-dom';

export default function FourOhFour(props) {
  const location = useLocation();

  return (
    <div>
      <h2>Oops</h2>
      <p>No page found for <code>{location.pathname}</code></p>
      <p>Hit the Playlistify button to go home.</p>
    </div>
  )
}