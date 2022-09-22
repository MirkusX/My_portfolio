import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import MediaQuery from "react-responsive";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
import { StyledButton } from "./StyledPortfolioComponents";

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const OpenMenu = () => {
    setOpen(!isOpen);
  };
  const CloseMenu = () => {
    setOpen(false);
  };
  const { NAVBAR } = PORTFOLIO_TEXT;
  return (
    <MediaQuery maxWidth={810}>
      <Menu
        styles={styles}
        isOpen={isOpen}
        onOpen={OpenMenu}
        onClose={CloseMenu}
      >
        <div>
          <StyledButton
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={CloseMenu}
          >
            {NAVBAR.NAVBAR_1}
          </StyledButton>
        </div>
        <div>
          <StyledButton
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={CloseMenu}
          >
            {NAVBAR.NAVBAR_2}
          </StyledButton>
        </div>
        <div>
          <StyledButton
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={CloseMenu}
          >
            {NAVBAR.NAVBAR_3}
          </StyledButton>
        </div>
        <div>
          <StyledButton
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={CloseMenu}
          >
            {NAVBAR.NAVBAR_4}
          </StyledButton>
        </div>
      </Menu>
    </MediaQuery>
  );
};

let styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
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
