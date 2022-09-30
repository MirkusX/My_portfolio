import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ProjectLink,
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
        breakpoint: 811,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <StyledSlider {...settings}>
      <div>
        <StyledImg src={SECTION_THREE.PROJECT_SLIDE_IMAGE_1} />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_1}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_1}>
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
      </div>
      <div>
        <StyledImg src={SECTION_THREE.PROJECT_SLIDE_IMAGE_2} />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_2}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_2}>
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
      </div>
      <div>
        <StyledImg src={SECTION_THREE.PROJECT_SLIDE_IMAGE_3} />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_3}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_3}>
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
      </div>
      <div>
        <StyledImg src={SECTION_THREE.PROJECT_SLIDE_IMAGE_4} />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_4}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_4}>
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
      </div>
      <div>
        <StyledImg src={SECTION_THREE.PROJECT_SLIDE_IMAGE_5} />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_5}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_5}>
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
      </div>
      <div>
        <StyledImg src={SECTION_THREE.PROJECT_SLIDE_IMAGE_6} />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_6}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_6}>
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
      </div>
      <div>
        <StyledImg src={SECTION_THREE.PROJECT_SLIDE_IMAGE_7} />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_7}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_7}>
          {SECTION_THREE.PROJECT_VISIT_BUTTON}
        </ProjectLink>
      </div>
    </StyledSlider>
  );
};
