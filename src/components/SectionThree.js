import {
  StyledDivOne,
  StyledH3,
  StyledProjectShowcase,
  StyledSection,
  StyledSectionProject,
} from "./StyledPortfolioComponents";
import { ProjectSlider } from "./ProjectSlider";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
export const SectionThree = () => {
  const { SECTION_THREE } = PORTFOLIO_TEXT;
  return (
    <StyledSection project id="projects">
      <StyledH3>{SECTION_THREE.PROJECT_TITLE}</StyledH3>
      <StyledProjectShowcase>
        <ProjectSlider />
      </StyledProjectShowcase>
    </StyledSection>
  );
};
