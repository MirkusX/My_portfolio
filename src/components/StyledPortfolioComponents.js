import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export const InfoDiv = styled.div`
  width: 50%;
  @media (max-width: 811px) {
    width: 90%;
  }
`;

export const ArrowDown = styled(AiOutlineArrowDown)`
  transform: ${(props) => (props.speen ? "rotate(180deg)" : "rotate(0deg)")};
  font-size: 24px;
`;

export const CollapsibleTextDiv = styled.div`
  border-top: 1px solid white;
  background-color: #001523;
  max-height: ${(props) => (props.ease ? "500px" : "0")};
  opacity: ${(props) => (props.ease ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  text-align: start;
`;

export const CollapsibleDiv = styled.div`
  margin: 1em 0;
  border: white 1px solid;
  border-radius: 3px;
  padding: 0.5em;
`;

export const CollapsibleButton = styled.div`
  padding: 0.5em;
  background-color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 30%;
  margin: 0 auto;
  background: #001523;
  border-radius: 3px;
  border: white 1px solid;
  @media (max-width: 811px) {
    width: 50%;
    line-height: 0;
  }
`;

export const ProjectLink = styled.a`
  background: darkblue;
  cursor: pointer;
  padding: 1em;
  text-decoration: none;
  color: white;
  border-radius: 3px;
  display: block;
  margin: 0;
  &:hover {
    background-color: blue;
  }
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
  cursor: pointer;
  &:hover {
    background-color: #00406c;
    box-shadow: 0px 3px 0px 0px #ffffff;
    border-radius: 3px 3px 0 0;
  }
  ${(props) => {
    if (props.navbar) {
      return `
      border-left: 1px solid #858897;
       `;
    }
  }}
`;

export const StyledBody = styled.div`
  background: #001523;
  color: white;
  overflow-x: hidden;
  text-align: center;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 1em;
`;

export const StyledDivOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  gap: 10px;
`;

export const StyledH1 = styled.h1`
  font-size: 5rem;
  margin: 0;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1em;
  justify-content: space-evenly;
  text-align: start;
  width: 90%;
  @media (max-width: 811px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 3rem;
`;

export const StyledP = styled.p`
  font-size: 2rem;
  margin: 0;
  ${(props) => {
    if (props.collapseTitle) {
      return `
      font-size: 1.5rem;
      color: white;
      user-select: none;
      margin: 0;
       `;
    }
  }}
  ${(props) => {
    if (props.collapsible) {
      return `
      font-size: 1rem;
      color: gray;
       `;
    }
  }}
`;

export const StyledH3 = styled.h3`
  font-size: 1.9rem;
  margin-top: 0;
`;

export const StyledProjectShowcase = styled.div`
  gap: 10px;
  padding: 1em;
  background-color: #001a2c;
  margin: 0 auto;

  width: 90%;
  @media (max-width: 811px) {
    width: 95%;
    margin-bottom: 1em;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export const StyledPFooter = styled.p`
  font-size: 1rem;
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
    box-shadow: 0px 3px 0px 0px #ffffff;
    border-radius: 3px 3px 0 0;
  }
`;

export const Space = styled.div`
  padding: 5em;
  @media (max-width: 811px) {
    padding: 0;
  }
`;

export const TestImg = styled.img`
  width: 15%;
  border-radius: 5px;
  @media (max-width: 810px) {
    width: 40%;
  }
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
  justify-content: space-between;
`;

export const HtmlIcon = styled(AiFillHtml5)`
  width: 24px;
  height: 24px;
  fill: #d35836;
`;

export const CssIcon = styled(DiCss3)`
  width: 24px;
  height: 24px;
  fill: #264de4;
`;

export const JavascriptIcon = styled(SiJavascript)`
  width: 24px;
  height: 24px;
  fill: #f2da1d;
`;

export const ReactIcon = styled(FaReact)`
  width: 24px;
  height: 24px;
  fill: #5ccfee;
`;

export const GithubIcon = styled(AiFillGithub)`
  width: 24px;
  height: 24px;
  ${(props) => {
    if (props.footer) {
      return `
      :hover{
        background: blue;
      }
       `;
    }
  }}
`;

export const DiscordIcon = styled(FaDiscord)`
  width: 24px;
  height: 24px;
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin: 1em;
  padding: 0;
`;
