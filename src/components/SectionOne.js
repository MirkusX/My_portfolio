import {
  CssIcon,
  HtmlIcon,
  IconDiv,
  InfoDiv,
  JavascriptIcon,
  ReactIcon,
  StyledDivOne,
  StyledH1,
  StyledP,
  StyledSection,
  StyledTextContainer,
  TestImg,
} from "./StyledPortfolioComponents";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
import { Collapisble } from "./Collapsible";

export const SectionOne = () => {
  const { SECTION_ONE } = PORTFOLIO_TEXT;
  return (
    <StyledSection id="home">
      <StyledDivOne>
        <StyledTextContainer>
          <TestImg src={SECTION_ONE.PORTFOLIO_IMAGE}></TestImg>
          <InfoDiv>
            <StyledH1>{SECTION_ONE.GREETING}</StyledH1>
            <StyledP collapsible>{SECTION_ONE.SMALL_INTRO}</StyledP>
            <Collapisble />
            <IconDiv>
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
              <ReactIcon />
            </IconDiv>
          </InfoDiv>
        </StyledTextContainer>
      </StyledDivOne>
    </StyledSection>
  );
};
