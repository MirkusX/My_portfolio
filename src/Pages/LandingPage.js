import DefaultExport from "../components/DefaultExport";
import { Button, Headline } from "../components/NamedExport";
import {
  DivButton,
  DivP,
  FlexDiv,
  StyledButton,
} from "../components/StyledComponents";
import { Click } from "../scripts/OnClick";

export const LandingPage = () => {
  return (
    <>
      <DefaultExport />
      <Headline />
      <Button />
      <StyledButton onClick={Click} />
      <FlexDiv>
        <DivButton>Hei</DivButton>
        <DivP>Dette er en knapp</DivP>
      </FlexDiv>
    </>
  );
};
