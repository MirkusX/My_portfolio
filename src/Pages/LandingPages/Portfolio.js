import { PortfolioNav } from "../../components/PortfolioNav";
import { SectionOne } from "../../components/SectionOne";
import { Space, StyledBody } from "../../components/StyledPortfolioComponents";
import { SectionThree } from "../../components/SectionThree";
import { Footer } from "../../components/Footer";
import { BurgerMenu } from "../../components/BurgerMenu";
export const Portfolio = () => {
  return (
    <StyledBody>
      <PortfolioNav />
      <BurgerMenu />
      <Space />
      <SectionOne />
      <Space />
      <SectionThree />
      <Space />
      <Footer />
    </StyledBody>
  );
};
