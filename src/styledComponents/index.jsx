import styled from "styled-components";

export const BodyBackground = styled.div`
  background-image: ${(props) =>
    props.bg
      ? "linear-gradient(360deg, #185794, #63c1d6)"
      : "radial-gradient(#37475e 0%, #10151b 70%)"};
  // background-image: radial-gradient(#37475e 0%, #10151b 70%);
  // background-image: linear-gradient(45deg, #23a88e, #dae65f);
  background-attachment: fixed;
  transition: 2s;
`;

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
    border: 2px solid yellow;
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
  font-size: 1.4rem;
`;

export const SectionSubTitle = styled.span`
  color: aqua;
  font-family: cursive;
  margin: 0px 15px 0px 10px;
  font-size: 1.02rem;
`;

export const ProjectTitle = styled.span`
  color: ${(props) => (props.mode ? "#ffff80" : "dodgerblue")};
  font-size: 1.03rem;
  font-weight: 400;
`;
