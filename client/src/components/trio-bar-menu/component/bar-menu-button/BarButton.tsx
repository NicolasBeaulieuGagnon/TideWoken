import React from "react";
import {
  BurgerButtonWrapper,
  TopLine,
  MiddleLine,
  BottomLine,
} from "../../../../StyledComponents/TriBarMenu.styled-components";

interface IBarButton {
  callback: React.MouseEventHandler;
  state: boolean;
}

const BarButton = ({ callback, state }: IBarButton) => {
  return (
    <BurgerButtonWrapper onClick={callback}>
      <TopLine state={state} />
      <MiddleLine state={state} />
      <BottomLine state={state} />
    </BurgerButtonWrapper>
  );
};

export default BarButton;
