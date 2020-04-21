import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  color: white;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.7);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 100px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.currnet ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(
  ({
    location: { pathname },
    match: {
      params: { id },
    },
  }) => (
    <Header>
      <List>
        <Item currnet={pathname.endsWith("/video") ? true : false}>
          <SLink to={`/movie/${id}/video`}>Video</SLink>
        </Item>
        <Item currnet={pathname.endsWith("/production") ? true : false}>
          <SLink to={`/movie/${id}/production`}>Production</SLink>
        </Item>
        {pathname.startsWith("/show") && (
          <Item currnet={pathname.endsWith("/season") ? true : false}>
            <SLink to={`/show/${id}/season`}>Season</SLink>
          </Item>
        )}
      </List>
    </Header>
  )
);
