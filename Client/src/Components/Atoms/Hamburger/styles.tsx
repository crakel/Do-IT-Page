import styled from "styled-components";

const Container = styled.img`
  width: 50px;
  height: 50px;
  content: url("/Hamburger.svg");
  cursor: pointer;
  :hover {
    opacity: 50%;
  }
`;

export default Container;
