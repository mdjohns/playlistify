import React from 'react';
import styled from 'styled-components';

// Bootstrap imports
import Button from 'react-bootstrap/Button';

// Component imports

/* 
  This component: 
    takes in array of track objects (album_art, title, artist, album)
    creates cards from those objects (styles and adds select button)
    renders the results
*/

const AlbumArt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    border-radius: 50%;
    height: 64px;
    width: 64px;
  }
`

const VoteButton = styled.button`
  background: green;
  text-align: center;
  width: px;
  height: 34px;
  border-radius: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
  text-decoration: none;
    
`

const SongInfo = styled.div`
  margin-right: auto;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 20px;
    padding: 0px;
    margin: 0px;
  }
  h2 {
    font-size: 18px;
    padding: 0px;
    margin: 0px;
  }
  h3 {
    font-size: 14px;
    padding: 0px;
    margin: 0px;
  }
`
//TODO: Add on-hover to make each card change color when hovered over
const ResultContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 1px solid black;
  border-radius: 4px;
`

function createResultCard(res) {
  return (
    <ResultContainer>
      <AlbumArt>
        <img src={res.album_art} />
      </AlbumArt>

      <SongInfo>
        <h1>{res.title}</h1>
        <h2>{res.artist}</h2>
        <h3>{res.album}</h3>
      </SongInfo>
      <VoteButton>+</VoteButton>
    </ResultContainer>
  )
}

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }
  
  render() {
    return (
      <div>
        { !this.props.searchResults ? null :
          this.props.searchResults.map(result => 
          <div>
            {createResultCard(result)}
          </div>
          )
        }
      </div>
    )
  }
}