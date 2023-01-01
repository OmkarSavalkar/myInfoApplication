import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 5px 45px;
  margin: ${(props) => props.buttonMargin};
  background-color: transparent;
  font-size: 1.1rem;
  color: aqua;
  border: 2px solid aqua;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none !important ;
  i {
    margin-left: 10px;
  }
  &:hover {
    border: 2px solid DodgerBlue;
    text-decoration: none !important;
    i {
      color: white;
    }
  }
`;

export const SectionTitle = styled.h3`
  position: relative;
  color: aqua;
  display: block;
  margin-top: 3%;
  font-family: cursive;
  font-size: 1.5rem;
`;

export const SectionSubTitle = styled.span`
  color: aqua;
  font-family: cursive;
`;
