import MediaQuery from "react-responsive";
import { useState } from "react";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
import {
  GithubIcon,
  LangIcon,
  NavDiv,
  StyledBurgerLink,
  StyledButton,
  StyledTrans,
} from "./StyledPortfolioComponents";
import { slide as Menu } from "react-burger-menu";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { langSelectContext } from "./langSelectContext";

export const BurgerMenu = () => {
  //Sets which TransButton should have the active state
  const { active, setActive } = useContext(langSelectContext);
  //Sets language rendered depending on which TransButton you click
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActive(!active);
  };
  //Allows translation and re-render of language
  const { t, i18n } = useTranslation();
  //Deconstruct text const for easy access
  const { NAVBAR, ARIA } = PORTFOLIO_TEXT;
  //Detects if Burger Menu is open or closed
  const [isOpen, setOpen] = useState(false);

  //Opens Burger Menu
  const openMenu = () => {
    setOpen(!isOpen);
  };
  //Closes Burger Menu
  const CloseMenu = () => {
    setOpen(false);
  };

  return (
    <MediaQuery maxWidth={811}>
      <Menu
        styles={styles}
        isOpen={isOpen}
        onOpen={openMenu}
        onClose={CloseMenu}
      >
        <NavDiv>
          <StyledTrans
            burger
            active={!active}
            disabled={!active}
            onClick={() => changeLanguage("no")}
          >
            <LangIcon />
            NO
          </StyledTrans>
          <StyledTrans
            burger
            active={active}
            disabled={active}
            onClick={() => changeLanguage("en")}
          >
            <LangIcon />
            ENG
          </StyledTrans>
        </NavDiv>
        <div>
          <StyledButton
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={CloseMenu}
            aria-label={ARIA.ARIA_NAV_SCROLL + NAVBAR.NAVBAR_1}
          >
            {t("Nav About me")}
          </StyledButton>
        </div>
        <div>
          <StyledButton
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={CloseMenu}
            aria-label={ARIA.ARIA_NAV_SCROLL + NAVBAR.NAVBAR_2}
          >
            {t("Nav Contact")}
          </StyledButton>
        </div>
        <div>
          <StyledButton
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={CloseMenu}
            aria-label={ARIA.ARIA_NAV_SCROLL + NAVBAR.NAVBAR_3}
          >
            {t("Nav Projects")}
          </StyledButton>
        </div>
        <div>
          <StyledBurgerLink
            aria-label={ARIA.ARIA_NAVIGATE + NAVBAR.NAVBAR_LINK}
          >
            <GithubIcon />
          </StyledBurgerLink>
        </div>
      </Menu>
    </MediaQuery>
  );
};
//Styles for Burger Menu
const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#433F40",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "16px",
    width: "16px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#001A2C",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
