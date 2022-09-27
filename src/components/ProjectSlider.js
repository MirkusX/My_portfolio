import projectshowcase1 from "../images/projectshowcase1.png";
import ratingsystem from "../images/ratingsystem.png";
import todolist from "../images/todolist.png";
import drummachine from "../images/drummachine.png";
import paulallen from "../images/paulallen.png";
import unitconverternu from "../images/unitconverternu.png";
import calculator from "../images/calculator.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ProjectDiv,
  ProjectLink,
  ProjectP,
  StyledImg,
  StyledPFooter,
  StyledSlider,
} from "./StyledPortfolioComponents";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";

export const ProjectSlider = () => {
  const { SECTION_THREE } = PORTFOLIO_TEXT;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <StyledSlider {...settings}>
      <div>
        <StyledImg src={projectshowcase1} />
        <StyledPFooter project>
          {SECTION_THREE.PROJECT_SLIDE_TITLE_1}
        </StyledPFooter>
        <ProjectLink href="https://mirkusx.github.io/albert-wesker-quote-generator/">
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
        <StyledPFooter>{SECTION_THREE.PROJECT_DESCRIPTION_REACT}</StyledPFooter>
      </div>
      <div>
        <StyledImg src={ratingsystem} />
        <StyledPFooter project>
          {SECTION_THREE.PROJECT_SLIDE_TITLE_2}
        </StyledPFooter>
        <ProjectLink href=" https://mirkusx.github.io/rating5out5/ ">
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </div>
      <div>
        <StyledImg src={todolist} />
        <StyledPFooter project>
          {SECTION_THREE.PROJECT_SLIDE_TITLE_3}
        </StyledPFooter>
        <ProjectLink href=" https://mirkusx.github.io/todolist/">
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </div>
      <div>
        <StyledImg src={drummachine} />
        <StyledPFooter project>
          {SECTION_THREE.PROJECT_SLIDE_TITLE_4}
        </StyledPFooter>
        <ProjectLink href=" https://mirkusx.github.io/machine-drum/">
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </div>
      <div>
        <StyledImg src={paulallen} />
        <StyledPFooter project>
          {SECTION_THREE.PROJECT_SLIDE_TITLE_5}
        </StyledPFooter>
        <ProjectLink href="https://mirkusx.github.io/lets-see-paul-allens-business-card/">
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSS}
        </StyledPFooter>
      </div>
      <div>
        <StyledImg src={unitconverternu} />
        <StyledPFooter project>
          {SECTION_THREE.PROJECT_SLIDE_TITLE_6}
        </StyledPFooter>
        <ProjectLink href="https://mirkusx.github.io/unit-conversion-nu/">
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </div>
      <div>
        <StyledImg src={calculator} />
        <StyledPFooter project>
          {SECTION_THREE.PROJECT_SLIDE_TITLE_7}
        </StyledPFooter>
        <ProjectLink href=" https://mirkusx.github.io/calculator/">
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </div>
    </StyledSlider>
  );
};
