import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const ContentContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: auto;
  background-color: rgba(25, 25, 25, 0.6);
  padding: 10px;
  flex: 1 1 0%;
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  /* background-color: rgba(24, 24, 28, 0.85);
  color: rgba(255, 255, 255, 0.6); */
  text-align: center;
  border-radius: 4px;
  padding: 10px;
  flex: 0 50%;
  /*demo*/
  /* border: red solid; */
  /* box-sizing: border-box; */
`;

const Logo = styled.div`
  background-image: url(${(props) => props.bgImage});
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Production = (props) => (
  <Container>
    <Title>Production Companies</Title>
    <ContentContainer>
      {props.production_companies &&
        props.production_companies.map((company, index) => (
          <Content key={index}>
            <Logo
              bgImage={`https://images.tmdb.org/t/p/w300${company.logo_path}`}
            ></Logo>
            <h1>{company.name}</h1>
          </Content>
        ))}
    </ContentContainer>
    <Title>Production Countries</Title>
    <ContentContainer>
      {props.production_countries &&
        props.production_countries.map((country, index) => (
          <Content key={index}>
            <h1>{country.name}</h1>
          </Content>
        ))}
    </ContentContainer>
  </Container>
);

export default Production;
