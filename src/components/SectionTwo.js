import {
  CssIcon,
  HtmlIcon,
  IconDiv,
  IconTextDiv,
  JavascriptIcon,
  ReactIcon,
  StyledDivOne,
  StyledH2,
  StyledSection,
} from "./StyledPortfolioComponents";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";

import { Collapisble } from "./Collapsible";
import { CollapisbleOne } from "./CollapsibleOne";
import { CollapisbleTwo } from "./CollapsibleTwo";

export const SectionTwo = () => {
  const { SECTION_TWO } = PORTFOLIO_TEXT;
  return (
    <StyledSection>
      <StyledDivOne blue id="about">
        <StyledH2>{SECTION_TWO.ABOUT_TITLE}</StyledH2>
        <IconTextDiv>
          <Collapisble />
          <CollapisbleOne />
          <CollapisbleTwo />
          <IconDiv>
            <HtmlIcon />
            <CssIcon />
            <JavascriptIcon />
            <ReactIcon />
          </IconDiv>
        </IconTextDiv>
      </StyledDivOne>
    </StyledSection>
  );
};
