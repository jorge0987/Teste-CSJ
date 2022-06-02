import React, { useEffect, useState, useRef } from "react";
import MaterialTable from "material-table";
import styled from "styled-components";
import { Container } from "@mui/material";



const Table = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  background: #000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  `;
function Home() {

  return (
    <Container>
      <Title>Locais Cadastradors</Title>
      <Table>
      
      </Table>
    </Container >
  );
}

export default Home;