import {
  StyledH3,
  StyledPFooter,
  StyledProjectShowcase,
} from "./StyledPortfolioComponents";
import { ProjectSlider } from "./ProjectSlider";
import { useTranslation } from "react-i18next";

export const SectionThree = () => {
  //Enables use of translations
  const { t } = useTranslation();

  return (
    <div id="projects">
      <StyledProjectShowcase>
        <StyledH3>{t("Projects MyProjects")}</StyledH3>
        <ProjectSlider />
      </StyledProjectShowcase>
    </div>
  );
};
