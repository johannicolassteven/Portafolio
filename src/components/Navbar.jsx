import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src="https://www.publicdomainpictures.net/pictures/290000/nahled/prenom-nicolas.png"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="nav-links">
          <Link to="/">Sobre mi</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="experiencia">Experiencia</Link>
          <Link to="contacto">
            <i className="bi bi-linkedin"></i>
            <i class="bi bi-github"></i>
            <i class="bi bi-whatsapp"></i>
          </Link>
        </ul>
      </div>
      <hr />
    </NavContainer>
  );
};

const NavContainer = styled.section`

 
  .nav-center {
    height: 5rem;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
     
    }
  }
  
  hr{
    display: none;
  }
  
  .nav-links{
    display: none;
  }

  @media (min-width: 992px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
     
    }
    .nav-links {
      display: flex;
      justify-content: right;
      margin: 0;

      li {
        margin:  0.5rem;
        list-style: none; 
        align-items: center;
      }
       

      a {
        margin: 1rem;
        padding: 1rem;
        text-decoration: none;
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        transition:  0.5s;
        border-left: 1px solid transparent;
        border-radius: 40%;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
         background-color: #d3eefb;
         border-left: 1px solid aliceblue;
         border-radius: 15%;
            transition:  0.5s;
        }
      }
    }


    hr{
        display: flex;
        background-color: aliceblue;
       margin: 2px 50px 0;
        height: 1px;
      }
  }
`;

export default Navbar;
