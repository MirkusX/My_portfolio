import { useState } from "react";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles.js/PortfolioText";
import {
  ArrowDown,
  CollapsibleButton,
  CollapsibleDiv,
  CollapsibleTextDiv,
  StyledP,
} from "./StyledPortfolioComponents";

export const Collapisble = () => {
  const { SECTION_TWO } = PORTFOLIO_TEXT;
  const [expand, setExpand] = useState(false);
  const ExpandDiv = () => {
    setExpand(!expand);
  };
  return (
    <CollapsibleDiv onClick={() => ExpandDiv()}>
      <CollapsibleButton>
        <StyledP collapseTitle>{SECTION_TWO.ABOUT_COLLAPSIBLE_TITLE_1}</StyledP>
        <ArrowDown speen={expand ? 180 : undefined} />
      </CollapsibleButton>
      <CollapsibleTextDiv ease={expand}>
        <StyledP collapsible>{SECTION_TWO.ABOUT_COLLAPSIBLE_1}</StyledP>
      </CollapsibleTextDiv>
    </CollapsibleDiv>
  );
};
