import projectshowcase1 from "../images/projectshowcase1.png";
import ratingsystem from "../images/ratingsystem.png";
import todolist from "../images/todolist.png";
import drummachine from "../images/drummachine.png";
import paulallen from "../images/paulallen.png";
import unitconverternu from "../images/unitconverternu.png";
import calculator from "../images/calculator.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  ProjectDiv,
  ProjectLink,
  ProjectP,
  StyledImg,
  StyledPFooter,
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
    <Slider {...settings}>
      <ProjectDiv>
        <StyledImg src={projectshowcase1} />
        <ProjectP>{SECTION_THREE.PROJECT_SLIDE_TITLE_1}</ProjectP>
        <ProjectLink href="https://mirkusx.github.io/albert-wesker-quote-generator/">
          Visit
        </ProjectLink>
        <StyledPFooter>{SECTION_THREE.PROJECT_DESCRIPTION_REACT}</StyledPFooter>
      </ProjectDiv>
      <ProjectDiv>
        <StyledImg src={ratingsystem} />
        <ProjectP>{SECTION_THREE.PROJECT_SLIDE_TITLE_2}</ProjectP>
        <ProjectLink href=" https://mirkusx.github.io/rating5out5/ ">
          Visit
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </ProjectDiv>
      <ProjectDiv>
        <StyledImg src={todolist} />
        <ProjectP>{SECTION_THREE.PROJECT_SLIDE_TITLE_3}</ProjectP>
        <ProjectLink href=" https://mirkusx.github.io/todolist/">
          Visit
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </ProjectDiv>
      <ProjectDiv>
        <StyledImg src={drummachine} />
        <ProjectP>{SECTION_THREE.PROJECT_SLIDE_TITLE_4}</ProjectP>
        <ProjectLink href=" https://mirkusx.github.io/machine-drum/">
          Visit
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </ProjectDiv>
      <ProjectDiv>
        <StyledImg src={paulallen} />
        <ProjectP>{SECTION_THREE.PROJECT_SLIDE_TITLE_5}</ProjectP>
        <ProjectLink href="https://mirkusx.github.io/lets-see-paul-allens-business-card/">
          Visit
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSS}
        </StyledPFooter>
      </ProjectDiv>
      <ProjectDiv>
        <StyledImg src={unitconverternu} />
        <ProjectP>{SECTION_THREE.PROJECT_SLIDE_TITLE_6}</ProjectP>
        <ProjectLink href="https://mirkusx.github.io/unit-conversion-nu/">
          Visit
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </ProjectDiv>
      <ProjectDiv>
        <StyledImg src={calculator} />
        <ProjectP>{SECTION_THREE.PROJECT_SLIDE_TITLE_7}</ProjectP>
        <ProjectLink href=" https://mirkusx.github.io/calculator/">
          Visit
        </ProjectLink>
        <StyledPFooter>
          {SECTION_THREE.PROJECT_DESCRIPTION_HTMLCSSJS}
        </StyledPFooter>
      </ProjectDiv>
    </Slider>
  );
};
