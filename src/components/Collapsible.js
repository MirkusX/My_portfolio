import { useState } from "react";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
import {
  CollapsibleButton,
  CollapsibleDiv,
  CollapsibleTextDiv,
  StyledPFooter,
} from "./StyledPortfolioComponents";

export const Collapisble = () => {
  const { SECTION_TWO } = PORTFOLIO_TEXT;
  const [expand, setExpand] = useState(false);
  const ExpandDiv = () => {
    setExpand(!expand);
  };
  console.log();
  return (
    <CollapsibleDiv>
      <CollapsibleButton onClick={() => ExpandDiv()}>
        Litt om meg
      </CollapsibleButton>
      <CollapsibleTextDiv ease={expand}>
        <StyledPFooter>{SECTION_TWO.ABOUT_COLLAPSIBLE_1}</StyledPFooter>
      </CollapsibleTextDiv>
    </CollapsibleDiv>
  );
};
