import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useProductsContext } from "../context/products_context";
import Sidebar from "./Sidebar";

const Navbar = () => {

  const {openSidebar} = useProductsContext();
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
          <button className="nav-toggle" type="button" onClick={openSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill=" #17678b"
              className="bi bi-justify"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        <ul className="nav-links">
          <Link to="/">Sobre mi</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="experiencia">Experiencia</Link>
        </ul>

        <div className="contacto">
          <a
            target="en_blank"
            href="https://www.linkedin.com/in/nicol%C3%A1s-espinosa/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a target="en_blank" href="https://github.com/johannicolassteven">
            <i className="bi bi-github"></i>
          </a>
        </div> 
      </div>
     <hr />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;

  .nav-center {
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
      margin-bottom:-10px;
      margin-left: 5px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }
  .contacto {
    display: none;
  }
  hr {
    display: none;
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    .nav-links {
      display: flex;
      justify-content: right;
      margin: 0;

      li {
        margin: 0.5rem;
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
        transition: 0.5s;
        border-left: 1px solid transparent;
        border-radius: 40%;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
          background-color: #d3eefb;
          border-left: 1px solid aliceblue;
          border-radius: 15%;
          transition: 0.5s;
        }
      }
    }

    .contacto {
      margin: 10px;
      margin-left: 90px;
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 20px;
      i {
        padding: 10px;
        color: black;
      }
      i:hover {
        color: gray;
      }
    }

    hr {
      display: flex;
      background-color: #01060a;
      margin: 2px 50px 0;
      height: 1px;
    }
  }
`;

export default Navbar;
