import React from "react";
import styled from "styled-components";

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
`;

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
  margin-top: 12px;
  margin-right: 4px;
`;

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
`;
//TODO: Add on-hover to make each card change color when hovered over
const ResultContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 1px solid black;
  border-radius: 4px;
`;

function Results(props) {
  return (
    <div>
      {!props.searchResults
        ? null
        : props.searchResults.map((result) => (
            <ResultContainer key={result.id} id={result.id}>
              <AlbumArt>
                <img src={result.album_art} />
              </AlbumArt>

              <SongInfo>
                <h1>{result.title}</h1>
                <h2>{result.artist}</h2>
                <h3>{result.album}</h3>
              </SongInfo>
              <VoteButton onClick={props.handleSuggestion}>+</VoteButton>
            </ResultContainer>
          ))}
    </div>
  );
}

export default Results;
