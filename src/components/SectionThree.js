import {
  StyledDivInsideDarkBlue,
  StyledDivProject,
  StyledH3,
  StyledProjectShowcase,
} from "./StyledPortfolioComponents";
import { ProjectSlider } from "./ProjectSlider";
export const SectionThree = () => {
  return (
    <div>
      <StyledDivProject id="projects">
        <StyledH3>Explore My Projects</StyledH3>
        <StyledProjectShowcase>
          <ProjectSlider />
        </StyledProjectShowcase>
      </StyledDivProject>
    </div>
  );
};
