import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const CollapsibleTextDiv = styled.div`
  background-color: #001523;
  border-radius: 5px;
  padding: ${(props) => (props.ease ? "0.5em 0.5em" : "0")};
  max-height: ${(props) => (props.ease ? "400px" : "0")};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
`;

export const CollapsibleDiv = styled.div`
  width: 70%;
  height: auto;
`;

export const CollapsibleButton = styled.button`
  background-color: inherit;
  border: white 1px solid;
  color: white;
  text-align: left;
  font-size: 1.5rem;
  width: 100%;
  &:after {
    content: " ↓ ";
  }
`;

export const StyledBurgerLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  background: #00111c;
  cursor: pointer;
  &:hover {
    background-color: #00406c;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 70%;
  margin: 0 auto;
`;

export const ProjectLink = styled.a`
  background: darkblue;
  cursor: pointer;
  width: 25%;
  padding: 0.5em;
  text-decoration: none;
`;

export const ProjectP = styled.p`
  font-size: 0.7rem;
  color: white;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 10px;
  gap: 10px;
  width: 100%;
  background: #00111c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${(props) => {
    if (props.ontop) {
      return `
      z-index: 99;
      position: fixed;
      `;
    }
  }}
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  background: #00111c;
  border-left: 1px solid #858897;
  cursor: pointer;
  &:hover {
    background-color: #00406c;
  }
`;

export const StyledBody = styled.div`
  background: #001523;
  color: white;
  overflow-x: hidden;
`;

export const StyledSection = styled.section`
  ${(props) => {
    if (props.project)
      return `
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin-top: 1em;
`;
  }}
`;

export const StyledDivOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  gap: 10px;
  ${(props) => {
    if (props.blue) {
      return `
      box-sizing: content-box;
       background-color: #001a2c;
       width: 100%;`;
    }
  }}
`;

export const StyledH1 = styled.h1`
  font-size: 8rem;
  margin: 0;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 3em;
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 4rem;
  margin: 0;
`;

export const StyledP = styled.p`
  font-size: ${(props) => (props.about ? "1.5rem" : "2rem")};
  color: gray;
`;

export const StyledH3 = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

export const StyledProjectShowcase = styled.div`
  padding: 10px;
  gap: 10px;
`;

export const StyledImg = styled.img`
  width: inherit;
`;

export const StyledPFooter = styled.p`
  font-size: ${(props) => (props.project ? "1rem" : "0.75rem")};
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  background: #00111c;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #00406c;
  }
`;

export const Space = styled.div`
  padding: 5em;
  @media (max-width: 810px) {
    padding: 0;
  }
`;

export const TestImg = styled.img`
  width: 40%;
`;

export const IconTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5em;
  width: 100%;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  gap: 5em;
`;

export const HtmlIcon = styled(AiFillHtml5)`
  width: 24px;
  height: 24px;
`;

export const CssIcon = styled(DiCss3)`
  width: 24px;
  height: 24px;
`;

export const JavascriptIcon = styled(SiJavascript)`
  width: 24px;
  height: 24px;
`;

export const ReactIcon = styled(FaReact)`
  width: 24px;
  height: 24px;
`;

export const GithubIcon = styled(AiFillGithub)`
  width: 24px;
  height: 24px;
`;

export const HamburgerMenu = styled(GiHamburgerMenu)`
  width: 24px;
  height: 24px;
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin: 1em;
  padding: 0;
`;
