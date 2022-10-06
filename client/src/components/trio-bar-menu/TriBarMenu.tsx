import { useState } from "react";
import {
  Wrapper,
  DropDownList,
} from "../../StyledComponents/TriBarMenu.styled-components";
import { getSiteLinks } from "../../utils/siteLinks";
import BarButton from "./component/bar-menu-button/BarButton";
import Link from "./component/link/Link";

const TriBarMenu = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const siteLinks = getSiteLinks();

  const changeBurgerIsOpenState = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <Wrapper>
      <BarButton callback={changeBurgerIsOpenState} state={burgerIsOpen} />
      <DropDownList state={burgerIsOpen}>
        {Object.values(siteLinks).map(({ name, targetId }) => (
          <Link
            key={name}
            name={name}
            targetId={targetId}
            callback={changeBurgerIsOpenState}
          />
        ))}
      </DropDownList>
    </Wrapper>
  );
};

export default TriBarMenu;
