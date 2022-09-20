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
import { StyledImg } from "./StyledPortfolioComponents";

export const ProjectSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <StyledImg src={projectshowcase1} />
      </div>
      <div>
        <StyledImg src={ratingsystem} />
      </div>
      <div>
        <StyledImg src={todolist} />
      </div>
      <div>
        <StyledImg src={drummachine} />
      </div>
      <div>
        <StyledImg src={paulallen} />
      </div>
      <div>
        <StyledImg src={unitconverternu} />
      </div>
      <div>
        <StyledImg src={calculator} />
      </div>
    </Slider>
  );
};
