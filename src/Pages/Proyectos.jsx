import React from "react";
import styled from "styled-components";

const ProyectosPage = () => {
  return (
    <main>
      <Wrapper className="pag section-center section">
        <article>
          <div className="title">
            <h2>Proyectos</h2>
          </div>
          <div className="container">
            <a href="https://whimsical-hotteok-6f938f.netlify.app/">
              Calculadora
            </a>
            <a href="https://tienda-online-nicolas.netlify.app/">E-comerce</a>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`

.title{
  display: flex;
  justify-content: center;
}

.container{
  margin: 2rem;
}

`;
export default ProyectosPage;