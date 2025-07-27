import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
  return (
    <Wrapper>
      <Headerlink to="/heroes">Heroes</Headerlink>
      <Headerlink to="/titans">Titans</Headerlink>
      <Headerlink to="/tower">Tower</Headerlink>
      <Headerlink to="/jul25">Calendar</Headerlink>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 5px;
  background-color: black;
`;

const Headerlink = styled(NavLink)`
  text-align: center;
  max-width: 100px;
  border-radius: 6px;
  padding: 5px;
  margin: auto;
  background-color: black;
  color: white;
  text-decoration: none;

  &:hover {
    color: yellow;
  }

  &.active {
    color: yellow;
  }
`;