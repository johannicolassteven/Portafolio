import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to='/proyectos'>Proyectos</Link>
    </NavContainer>
  );
};


const NavContainer = styled.section`

    background-color: aquamarine;
    
`

export default Navbar;
