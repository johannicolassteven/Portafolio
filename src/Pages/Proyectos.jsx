import React from "react";
import styled from "styled-components";

const ProyectosPage = () => {
  return (
    <main>
      <Wrapper className="pag section-center section">
        <article>
          <ul>
            <div className="container">
              <li>
                <a href="https://whimsical-hotteok-6f938f.netlify.app/">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="https://tienda-online-nicolas.netlify.app/">
                  E-comerce
                </a>
              </li>
            </div>
          </ul>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
 
`;
export default ProyectosPage;
