import MediaQuery from "react-responsive";
import {
  GithubIcon,
  LangIcon,
  NavDiv,
  StyledButton,
  StyledLink,
  StyledNav,
  StyledTrans,
} from "./StyledPortfolioComponents";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles/PortfolioText";
import { useTranslation } from "react-i18next";
import { langSelectContext } from "./langSelectContext";
import { useContext } from "react";

export const PortfolioNav = () => {
  //Deconstructs text consts for easy access
  const { NAVBAR, ARIA } = PORTFOLIO_TEXT;
  //Enables use of translations and changing language rendered
  const { t, i18n } = useTranslation();
  //Detects which TransButton should be active
  const { active, setActive } = useContext(langSelectContext);
  //Changes language rendered and state on active
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActive(!active);
  };

  return (
    <MediaQuery minWidth={811}>
      <StyledNav ontop>
        <NavDiv>
          {/* Changes language when clicked */}
          <StyledTrans
            onClick={() => changeLanguage("no")}
            active={!active}
            disabled={!active}
          >
            <LangIcon />
            {NAVBAR.NAVBAR_NO}
          </StyledTrans>
          <p>|</p>
          <StyledTrans
            onClick={() => changeLanguage("en")}
            active={active}
            disabled={active}
          >
            <LangIcon />
            {NAVBAR.NAVBAR_EN}
          </StyledTrans>
        </NavDiv>
        <NavDiv>
          <StyledButton
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            aria-label={ARIA.ARIA_NAV_SCROLL + NAVBAR.NAVBAR_1}
            tabIndex="0"
          >
            {t("Nav About me")}
          </StyledButton>
          <StyledButton
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            tabIndex="0"
            aria-label={ARIA.ARIA_NAV_SCROLL + NAVBAR.NAVBAR_2}
          >
            {t("Nav Projects")}
          </StyledButton>
          <StyledButton
            to="contact"
            spy={true}
            smooth={true}
            tabIndex="0"
            aria-label={ARIA.ARIA_NAV_SCROLL + NAVBAR.NAVBAR_3}
          >
            {t("Nav Contact")}
          </StyledButton>
          <StyledLink
            navbar
            tabIndex="0"
            href={NAVBAR.NAVBAR_LINK}
            aria-label={ARIA.ARIA_NAVIGATE + NAVBAR.NAVBAR_LINK}
            target="_blank"
          >
            <GithubIcon />
          </StyledLink>
        </NavDiv>
      </StyledNav>
    </MediaQuery>
  );
};
