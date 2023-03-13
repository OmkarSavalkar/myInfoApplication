import styled from "styled-components";
import back from "../images/back5.png";
import darkback from "../images/backDark.jpg";

export const BodyBackground = styled.div`
  background-image: ${(props) =>
    props.bg ? `url(${back})` : `url(${darkback})`};
  // background-image: radial-gradient(#37475e 0%, #10151b 70%);
  // background-image: linear-gradient(45deg, #23a88e, #dae65f);
  background-attachment: fixed;
  background-size: cover;
  transition: 3s;
`;

export const StyledButton = styled.button`
  padding: 5px 45px;
  margin: ${(props) => props.buttonMargin};
  background-color: transparent;
  font-size: 1.1rem;
  color: aqua;
  border: 3px solid yellow;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none !important ;
  i {
    margin-left: 10px;
  }
  &:hover {
    border: 2px solid aqua;
    color: yellow;
    text-decoration: none !important;
    i {
      color: yellow;
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
  margin: 0px 15px 0px 10px;
  font-size: 1.07rem;
`;

export const ProjectTitle = styled.span`
  // color: #ffff80;
  color: yellow;
  font-size: 1.05rem;
  font-weight: 400;
`;
