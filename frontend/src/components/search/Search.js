import React from 'react';

// React Bootstrap imports
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

// Component imports
import Results from './Results';


// test data
const testResults = [
  {
    "title": "Testing!",
    "artist": "Test",
    "album": "Test: The Album",
    "album_art": "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4"
  },
  {
    "title": "Testing 123!",
    "artist": "Testimony",
    "album": "Test: The Album 2",
    "album_art": "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4"
  },
  {
    "title": "Testing 1234!",
    "artist": "Tester",
    "album": "Test: The Album 3",
    "album_art": "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4"
  },
]

export default function Search() {
  return (
    <div>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">🎵</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Search for a track">
        </FormControl>
      </InputGroup>
      
      <Results searchResults={testResults}/>
    </div>
  )
}