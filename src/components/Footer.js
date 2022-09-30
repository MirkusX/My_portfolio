import {
  DiscordIcon,
  GithubIcon,
  StyledLink,
  StyledNav,
  StyledPFooter,
} from "./StyledPortfolioComponents";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";

export const Footer = () => {
  const { FOOTER } = PORTFOLIO_TEXT;
  return (
    <StyledNav id="contact">
      <StyledPFooter>{FOOTER.FOOTER_PAGE_BY}</StyledPFooter>
      <StyledLink>
        <GithubIcon />
      </StyledLink>
      <p>|</p>
      <StyledLink>
        <DiscordIcon />
      </StyledLink>
    </StyledNav>
  );
};
