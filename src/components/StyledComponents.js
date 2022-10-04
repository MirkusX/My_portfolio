import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  border: solid 3px black;
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: 5em;
`;

export const DivButton = styled.button`
  background: black;
  border: none;
  color: white;
  padding: 1.5em;
`;

export const DivP = styled.p`
  color: green;
  &:before {
    content: "<";
  }
`;
