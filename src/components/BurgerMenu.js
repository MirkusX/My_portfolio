import { slide as Menu } from "react-burger-menu";
import MediaQuery from "react-responsive";

export const BurgerMenu = () => {
  return (
    <MediaQuery maxWidth={810}>
      <Menu styles={styles}>
        <div>
          <p>Home</p>
        </div>
        <div>
          <p>About</p>
        </div>
        <div>
          <p>Projects</p>
        </div>
        <div>
          <p>Contact</p>
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
