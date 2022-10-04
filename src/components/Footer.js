import {
  DiscordIcon,
  GithubIcon,
  StyledLink,
  StyledNav,
  StyledPFooter,
} from "./StyledPortfolioComponents";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledNav id="contact">
      <StyledPFooter>{t("Footer ContactMe")}</StyledPFooter>
      <StyledLink tabIndex="0">
        <GithubIcon />
      </StyledLink>
      <p>|</p>
      <StyledLink tabIndex="0">
        <DiscordIcon />
      </StyledLink>
    </StyledNav>
  );
};
