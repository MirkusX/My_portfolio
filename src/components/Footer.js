import {
  StyledFooter,
  StyledNav,
  StyledPFooter,
} from "./StyledPortfolioComponents";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
import { PortfolioNav } from "./PortfolioNav";

export const Footer = () => {
  const { FOOTER } = PORTFOLIO_TEXT;
  return (
    <StyledNav id="contact">
      <StyledPFooter>{FOOTER.FOOTER_PAGE_BY}</StyledPFooter>
      <AiFillGithub />
      <FaDiscord />
    </StyledNav>
  );
};
