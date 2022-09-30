import { StyledH3, StyledProjectShowcase } from "./StyledPortfolioComponents";
import { ProjectSlider } from "./ProjectSlider";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
export const SectionThree = () => {
  const { SECTION_THREE } = PORTFOLIO_TEXT;
  return (
    <div id="projects">
      <StyledProjectShowcase>
        <StyledH3>{SECTION_THREE.PROJECT_TITLE}</StyledH3>
        <ProjectSlider />
      </StyledProjectShowcase>
    </div>
  );
};
