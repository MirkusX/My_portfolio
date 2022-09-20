import { StyledFooter, StyledPFooter } from "./StyledPortfolioComponents";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyledFooter id="contact">
      <StyledPFooter>A page by Marcus</StyledPFooter>
      <StyledPFooter>|</StyledPFooter>
      <StyledPFooter>Contact me at</StyledPFooter>
      <AiFillGithub style={{ width: "24px", height: "24px" }} />
      <FaDiscord style={{ width: "24px", height: "24px" }} />
    </StyledFooter>
  );
};
