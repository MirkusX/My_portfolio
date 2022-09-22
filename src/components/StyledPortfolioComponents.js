import styled from "styled-components";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const ProjectLink = styled.a`
  background: darkblue;
  cursor: pointer;
  width: 25%;
  padding: 0.5em;
  text-decoration: none;
`;

export const ProjectDiv = styled.div``;

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
  position: fixed;
  width: 100%;
  background: #00111c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 99;
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

export const StyledSectionOne = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 100px;
  gap: 10px;
`;

export const StyledDivOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 100px;
  gap: 10px;
`;

export const StyledDivInsideOne = styled.div``;

export const StyledSectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 5em;
  gap: 10px;
`;

export const StyledH1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 8rem;
  line-height: 150px;
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
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 75px;
`;

export const StyledP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 38px;
  color: gray;
`;

export const StyledDivInsideDarkBlue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 5.152em;
  gap: 10px;
  background-color: #001a2c;
`;

export const StyledSectionProject = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 100px;
  gap: 10px;
`;

export const StyledDivProject = styled.div`
  padding: 1em 5em;
`;

export const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 56px;
  margin: 0;
`;

export const StyledProjectShowcase = styled.div`
  padding: 10px;
  gap: 10px;
`;

export const StyledImg = styled.img`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const StyledPFooter = styled.p`
  font-style: normal;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledFooter = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #00111c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5em;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5em;
`;

export const StyledPProjectTitle = styled.p`
  font-size: 16px;
  color: gray;
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
