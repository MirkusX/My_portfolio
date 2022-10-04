import { useState } from "react";
import {
  ArrowDown,
  CollapsibleButton,
  CollapsibleDiv,
  CollapsibleTextDiv,
  StyledH2,
  StyledP,
} from "./StyledPortfolioComponents";
import { useTranslation } from "react-i18next";

export const Collapisble = () => {
  //Enables use of translation
  const { t } = useTranslation();
  //Detects state of collapsible div
  const [expand, setExpand] = useState(false);

  const ExpandDiv = () => {
    setExpand(!expand);
  };
  return (
    <CollapsibleDiv
      background={expand}
      onClick={() => ExpandDiv()}
      tabIndex="0"
      //Enables use of Enter key to open collapse div
      onKeyDown={(e) => e.key === "Enter" && ExpandDiv()}
    >
      <CollapsibleButton>
        <StyledH2 collapseTitle>{t("Section One Read")}</StyledH2>
        <ArrowDown speen={expand ? 180 : undefined} />
        {/* Spin transition for arrow in collapse div */}
      </CollapsibleButton>
      <CollapsibleTextDiv ease={expand}>
        <StyledP collapsible>{t("Section One Description")}</StyledP>
      </CollapsibleTextDiv>
    </CollapsibleDiv>
  );
};
