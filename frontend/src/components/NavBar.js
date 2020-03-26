import React from 'react';
import styled from 'styled-components';
import { Link }  from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import spotify_icon from '../spotify_icon.png'

const StyledNavBar = styled(Navbar) `
  background-color: #191414;
  padding-top: 5px;
  padding-bottom: 5px;
`

const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
`
const BrandText = styled.span`
  margin-left: 5px;
  vertical-align: middle;
  color: white;
  display: inline-block;
`

export default function NavBar(props) {
  return (
    
    <StyledNavBar expand="lg">
      <Nav>
        <Navbar.Brand as={ Link } to="/">
          <Logo 
            src={spotify_icon} 
            width="20" 
            height="20" 
          />
          <BrandText>
            Playlistify
          </BrandText>
        </Navbar.Brand>
      </Nav>

    </StyledNavBar>
  )
}