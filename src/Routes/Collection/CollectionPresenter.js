import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";
import Message from "../../Components/Message";
import { Link, Route } from "react-router-dom";
import Part from "../../Components/Part";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 60%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Collection = styled.div`
  position: absolute;
  right: 10px;
  top: 0px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 120px;
  width: 10%;
  color: white;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const IMDB = styled.div`
  background-image: url(${(props) => props.bgImage});
  width: 30px;
  height: 20px;
  background-size: cover;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 2;
  width: 50%;
`;

const TabContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const CollectionPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>{result.name}| Nomflix</title>
      </Helmet>
      <Backdrop
        bgImage={`https://images.tmdb.org/t/p/original${result.backdrop_path}`}
      ></Backdrop>
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://images.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.jpeg")
          }
        ></Cover>
        <Data>
          <Title>{result.name}</Title>
          {result.belongs_to_collection && (
            <Collection
              bgImage={
                result.belongs_to_collection.poster_path
                  ? `https://images.tmdb.org/t/p/original${result.belongs_to_collection.poster_path}`
                  : require("../../assets/noPosterSmall.jpeg")
              }
            >
              {result.belongs_to_collection.name}
            </Collection>
          )}

          <Overview>{result.overview}</Overview>
          <Part {...result} />
        </Data>
      </Content>
    </Container>
  );

CollectionPresenter.prototype = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CollectionPresenter;
