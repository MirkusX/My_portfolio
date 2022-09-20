import {
  GithubIcon,
  StyledButton,
  StyledLink,
  StyledNav,
} from "./StyledPortfolioComponents";

import MediaQuery from "react-responsive";

export const PortfolioNav = () => {
  return (
    <MediaQuery minWidth={811}>
      <StyledNav>
        <StyledButton to="home" spy={true} smooth={true} offset={-200}>
          Home
        </StyledButton>
        <StyledButton to="about" spy={true} smooth={true} offset={-150}>
          About
        </StyledButton>
        <StyledButton to="projects" spy={true} smooth={true} offset={-70}>
          Projects
        </StyledButton>
        <StyledButton to="contact" spy={true} smooth={true}>
          Contact
        </StyledButton>
        <StyledLink>
          <GithubIcon />
        </StyledLink>
      </StyledNav>
    </MediaQuery>
  );
};
