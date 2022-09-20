import { PortfolioNav } from "../../components/PortfolioNav";
import { SectionOne } from "../../components/SectionOne";
import { Space, StyledBody } from "../../components/StyledPortfolioComponents";
import { SectionTwo } from "../../components/SectionTwo";
import { SectionThree } from "../../components/SectionThree";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
export const Portfolio = () => {
  return (
    <StyledBody>
      <PortfolioNav />
      <MobileNav />
      <SectionOne />
      <Space />
      <SectionTwo />
      <Space />
      <SectionThree />
      <Space />
      <Footer />
    </StyledBody>
  );
};
