import { EmailIcon, StyledLink, StyledNav } from "./StyledPortfolioComponents";
import { useTranslation } from "react-i18next";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles/PortfolioText";

export const Footer = () => {
  const { CONTACT } = PORTFOLIO_TEXT;
  //Enables use of translation
  const { t } = useTranslation();

  return (
    <StyledNav id="contact">
      <StyledLink tabIndex="0" href={CONTACT.EMAIL}>
        {t("Footer ContactMe")} <EmailIcon />
      </StyledLink>
    </StyledNav>
  );
};
