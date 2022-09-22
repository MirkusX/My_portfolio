import {
  CssIcon,
  HtmlIcon,
  IconDiv,
  IconTextDiv,
  JavascriptIcon,
  ReactIcon,
  StyledDivInsideDarkBlue,
  StyledH2,
  StyledP,
  StyledSectionTwo,
} from "./StyledPortfolioComponents";

import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";

const { SECTION_TWO } = PORTFOLIO_TEXT;

export const SectionTwo = () => {
  return (
    <StyledSectionTwo>
      <StyledDivInsideDarkBlue id="about">
        <IconTextDiv>
          <div>
            <StyledH2>{SECTION_TWO.ABOUT_TITLE}</StyledH2>
            <StyledP>{SECTION_TWO.ABOUT_DESCRIPTION}</StyledP>
          </div>
          <IconDiv>
            <HtmlIcon />
            <CssIcon />
            <JavascriptIcon />
            <ReactIcon />
          </IconDiv>
        </IconTextDiv>
      </StyledDivInsideDarkBlue>
    </StyledSectionTwo>
  );
};
