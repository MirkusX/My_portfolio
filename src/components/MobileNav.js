import { HamburgerMenu, HamburgerWrapper } from "./StyledPortfolioComponents";
import MediaQuery from "react-responsive";
import { useState } from "react";
export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <MediaQuery maxWidth={810}>
      <HamburgerWrapper>
        <HamburgerMenu />
      </HamburgerWrapper>
    </MediaQuery>
  );
};
