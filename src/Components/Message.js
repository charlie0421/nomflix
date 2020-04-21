import React from "react";
import PropsType from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

Message.PropsType = {
  text: PropsType.string.isRequired,
  color: PropsType.string.isRequired,
};

export default Message;
