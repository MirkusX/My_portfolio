import {
  StyledDivInsideOne,
  StyledDivOne,
  StyledH1,
  StyledP,
  StyledSectionOne,
  StyledTextContainer,
  TestImg,
} from "./StyledPortfolioComponents";
import djcoolsunglasses from "../images/djcoolsunglasses.png";

export const SectionOne = () => {
  return (
    <StyledSectionOne id="home">
      <StyledDivOne>
        <StyledDivInsideOne>
          <StyledTextContainer>
            <TestImg src={djcoolsunglasses}></TestImg>
            <div>
              <StyledH1>Hi</StyledH1>
              <StyledP>I am a FRONT-END student from Antartica</StyledP>
            </div>
          </StyledTextContainer>
        </StyledDivInsideOne>
      </StyledDivOne>
    </StyledSectionOne>
  );
};
