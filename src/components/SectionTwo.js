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

export const SectionTwo = () => {
  return (
    <StyledSectionTwo>
      <StyledDivInsideDarkBlue id="about">
        <IconTextDiv>
          <div>
            <StyledH2>About</StyledH2>
            <StyledP>
              I am a FRONT-END student working with HTML, CSS, JS, TypeScript
              and React
            </StyledP>
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
