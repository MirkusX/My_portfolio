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
import {
  PORTFOLIO_TEXT,
  ProjectArray,
} from "../Pages/LandingPages/LandingPagesFiles/PortfolioText";
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
  const { ARIA } = PORTFOLIO_TEXT;
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
      {/* Displays content from array */}
      {ProjectArray.map((item, index) => {
        return (
          <div key={index}>
            <StyledImg
              src={item.PROJECT_SLIDE_IMAGE}
              aria-label={ARIA.ARIA_IMAGE_LABEL + item.PROJECT_SLIDE_TITLE}
            />
            <StyledPFooter>{item.PROJECT_SLIDE_TITLE}</StyledPFooter>
            <ProjectLink href={item.PROJECT_SLIDE_LINK} target="_blank">
              {t("Projects Visit")}
            </ProjectLink>
          </div>
        );
      })}
    </StyledSlider>
  );
};
