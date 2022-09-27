import { useState } from "react";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
import {
  CollapsibleButton,
  CollapsibleDiv,
  CollapsibleTextDiv,
  StyledP,
  StyledPFooter,
} from "./StyledPortfolioComponents";

export const CollapisbleTwo = () => {
  const { SECTION_TWO } = PORTFOLIO_TEXT;
  const [expand, setExpand] = useState(false);
  const ExpandDiv = () => {
    setExpand(!expand);
  };
  return (
    <CollapsibleDiv>
      <CollapsibleButton onClick={() => ExpandDiv()}>
        Enda litt mer, siste jeg lover
      </CollapsibleButton>
      <CollapsibleTextDiv ease={expand}>
        <StyledPFooter>{SECTION_TWO.ABOUT_COLLAPSIBLE_3}</StyledPFooter>
      </CollapsibleTextDiv>
    </CollapsibleDiv>
  );
};
