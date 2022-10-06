import {
  EmailIcon,
  StyledLink,
  StyledNav,
  StyledP,
  StyledPFooter,
} from "./StyledPortfolioComponents";
import { useTranslation } from "react-i18next";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles/PortfolioText";

export const Footer = () => {
  const { CONTACT } = PORTFOLIO_TEXT;
  //Enables use of translation
  const { t } = useTranslation();

  return (
    <StyledNav id="contact">
      <StyledPFooter>{t("Footer ContactMe")}</StyledPFooter>
      <p>|</p>
      <StyledLink tabIndex="0" href={CONTACT.EMAIL}>
        <EmailIcon />
      </StyledLink>
    </StyledNav>
  );
};
