import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  LeftArrow,
  ProjectLink,
  RightArrow,
  StyledImg,
  StyledPFooter,
  StyledSlider,
} from "./StyledPortfolioComponents";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles/PortfolioText";
import { useTranslation } from "react-i18next";
//Custom arrows for carousel
const Parrow = ({ className, onClick, style }) => (
  <LeftArrow className={className} onClick={onClick} style={{ ...style }} />
);

const Narrow = ({ className, onClick, style }) => (
  <RightArrow className={className} onClick={onClick} style={{ ...style }} />
);

export const ProjectSlider = () => {
  //Enables use of translation
  const { t } = useTranslation();
  //Deconstruction of text consts for easy access
  const { SECTION_THREE, ARIA } = PORTFOLIO_TEXT;
  //Settings for carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    nextArrow: <Narrow />,
    prevArrow: <Parrow />,
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
    //Carousel
    <StyledSlider {...settings}>
      <div>
        <StyledImg
          src={SECTION_THREE.PROJECT_SLIDE_IMAGE_1}
          aria-label={
            ARIA.ARIA_IMAGE_LABEL + SECTION_THREE.PROJECT_SLIDE_TITLE_1
          }
        />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_1}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_1}>
          {t("Projects Visit")}
        </ProjectLink>
      </div>
      <div>
        <StyledImg
          src={SECTION_THREE.PROJECT_SLIDE_IMAGE_2}
          aria-label={
            ARIA.ARIA_IMAGE_LABEL + SECTION_THREE.PROJECT_SLIDE_TITLE_2
          }
        />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_2}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_2}>
          {t("Projects Visit")}
        </ProjectLink>
      </div>
      <div>
        <StyledImg
          src={SECTION_THREE.PROJECT_SLIDE_IMAGE_3}
          aria-label={
            ARIA.ARIA_IMAGE_LABEL + SECTION_THREE.PROJECT_SLIDE_TITLE_3
          }
        />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_3}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_3}>
          {t("Projects Visit")}
        </ProjectLink>
      </div>
      <div>
        <StyledImg
          src={SECTION_THREE.PROJECT_SLIDE_IMAGE_4}
          aria-label={
            ARIA.ARIA_IMAGE_LABEL + SECTION_THREE.PROJECT_SLIDE_TITLE_4
          }
        />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_4}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_4}>
          {t("Projects Visit")}
        </ProjectLink>
      </div>
      <div>
        <StyledImg
          src={SECTION_THREE.PROJECT_SLIDE_IMAGE_5}
          aria-label={
            ARIA.ARIA_IMAGE_LABEL + SECTION_THREE.PROJECT_SLIDE_TITLE_5
          }
        />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_5}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_5}>
          {t("Projects Visit")}
        </ProjectLink>
      </div>
      <div>
        <StyledImg
          src={SECTION_THREE.PROJECT_SLIDE_IMAGE_6}
          aria-label={
            ARIA.ARIA_IMAGE_LABEL + SECTION_THREE.PROJECT_SLIDE_TITLE_6
          }
        />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_6}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_6}>
          {t("Projects Visit")}
        </ProjectLink>
      </div>
      <div>
        <StyledImg
          src={SECTION_THREE.PROJECT_SLIDE_IMAGE_7}
          aria-label={
            ARIA.ARIA_IMAGE_LABEL + SECTION_THREE.PROJECT_SLIDE_TITLE_7
          }
        />
        <StyledPFooter>{SECTION_THREE.PROJECT_SLIDE_TITLE_7}</StyledPFooter>
        <ProjectLink href={SECTION_THREE.PROJECT_SLIDE_LINK_7}>
          {t("Projects Visit")}
        </ProjectLink>
      </div>
    </StyledSlider>
  );
};
