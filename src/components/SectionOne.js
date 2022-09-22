import {
  StyledDivInsideOne,
  StyledDivOne,
  StyledH1,
  StyledP,
  StyledSectionOne,
  StyledTextContainer,
  TestImg,
} from "./StyledPortfolioComponents";
import portraittest from "../images/portraittest.jpg";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";

export const SectionOne = () => {
  const { SECTION_ONE } = PORTFOLIO_TEXT;
  return (
    <StyledSectionOne id="home">
      <StyledDivOne>
        <StyledDivInsideOne>
          <StyledTextContainer>
            <TestImg src={portraittest}></TestImg>
            <div>
              <StyledH1>{SECTION_ONE.GREETING}</StyledH1>
              <StyledP>{SECTION_ONE.SMALL_INTRO}</StyledP>
            </div>
          </StyledTextContainer>
        </StyledDivInsideOne>
      </StyledDivOne>
    </StyledSectionOne>
  );
};
