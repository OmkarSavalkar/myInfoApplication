import styled from "styled-components";
import lightback from "../images/backLight.jpg";
import darkback from "../images/backDark.jpg";

export const BodyBackground = styled.div`
  background-image: ${(props) =>
    props.bg ? `url(${lightback})` : `url(${darkback})`};
  background-attachment: fixed;
  background-size: cover;
  transition: 5s;
`;

export const StyledButton = styled.button`
  padding: 5px 45px;
  margin: ${(props) => props.buttonMargin};
  background-color: transparent;
  font-size: 1.1rem;
  color: ${(props) => (props.lightMode ? "black" : "white")};
  border: 1.5px solid ${(props) => (props.lightMode ? "black" : "white")};
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none !important ;
  i {
    margin-left: 10px;
  }
  &:hover {
    border: 2px solid ${(props) => (props.lightMode ? "black" : "white")};
    text-decoration: none !important;
  }
`;

export const SectionTitle = styled.h3`
  position: relative;
  color: ${(props) => (props.lightMode ? "navy" : "aqua")};
  display: block;
  margin-top: 3%;
  font-family: cursive;
  font-size: 1.5rem;
`;

export const SectionSubTitle = styled.span`
  color: ${(props) => (props.lightMode ? "navy" : "aqua")};
  font-family: cursive;
  margin: 0 2% 0 2%;
  font-size: 1.07rem;
`;

export const ProjectTitle = styled.span`
  // color: #ffff80;
  color: ${(props) => (props.lightMode ? "black" : "yellow")};
  font-size: 1.05rem;
  font-weight: 400;
`;
