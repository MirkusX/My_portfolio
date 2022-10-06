import {
  CssIcon,
  HtmlIcon,
  IconDiv,
  InfoDiv,
  JavascriptIcon,
  ReactIcon,
  StyledDivOne,
  StyledH1,
  StyledP,
  StyledSection,
  StyledTextContainer,
  PortfolioImg,
} from "./StyledPortfolioComponents";
import { PORTFOLIO_TEXT } from "../Pages/LandingPages/LandingPagesFiles/PortfolioText";
import { Collapisble } from "./Collapsible";
import { useTranslation } from "react-i18next";

export const SectionOne = () => {
  //Enables use of translations
  const { t } = useTranslation();
  //Deconstruction of text consts for easy access
  const { SECTION_ONE, ARIA } = PORTFOLIO_TEXT;

  return (
    <StyledSection id="home">
      <StyledDivOne>
        <StyledTextContainer>
          <PortfolioImg
            src={SECTION_ONE.PORTFOLIO_IMAGE}
            aria-label={ARIA.ARIA_IMAGE_LABEL + "Marcus"}
          ></PortfolioImg>
          <InfoDiv>
            <StyledH1>{t("Section One Hi")}</StyledH1>
            <StyledP collapsible>{t("Section One And")}</StyledP>
            <Collapisble />
            <IconDiv>
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
              <ReactIcon />
            </IconDiv>
          </InfoDiv>
        </StyledTextContainer>
      </StyledDivOne>
    </StyledSection>
  );
};
