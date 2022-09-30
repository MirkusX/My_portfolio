import {
  GithubIcon,
  StyledButton,
  StyledLink,
  StyledNav,
} from "./StyledPortfolioComponents";

import MediaQuery from "react-responsive";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";

export const PortfolioNav = () => {
  const { NAVBAR } = PORTFOLIO_TEXT;
  return (
    <MediaQuery minWidth={811}>
      <StyledNav ontop>
        <StyledButton
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          activeClass="active"
        >
          {NAVBAR.NAVBAR_2}
        </StyledButton>
        <StyledButton
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          activeClass="active"
        >
          {NAVBAR.NAVBAR_3}
        </StyledButton>
        <StyledButton
          to="contact"
          spy={true}
          smooth={true}
          activeClass="active"
        >
          {NAVBAR.NAVBAR_4}
        </StyledButton>
        <StyledLink navbar>
          <GithubIcon />
        </StyledLink>
      </StyledNav>
    </MediaQuery>
  );
};
