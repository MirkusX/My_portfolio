import { PortfolioNav } from "../../components/PortfolioNav";
import { SectionOne } from "../../components/SectionOne";
import { Space, StyledBody } from "../../components/StyledPortfolioComponents";
import { SectionThree } from "../../components/SectionThree";
import { Footer } from "../../components/Footer";
import { BurgerMenu } from "../../components/BurgerMenu";
import { langSelectContext } from "../../components/langSelectContext";
import { useState } from "react";

export const Portfolio = () => {
  const [active, setActive] = useState(false);

  return (
    <langSelectContext.Provider value={{ active, setActive }}>
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
    </langSelectContext.Provider>
  );
};
