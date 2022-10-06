import styled from "styled-components";
import { Link } from "react-scroll";

import { UnStyledButton } from "./Common.styled-components";

export const Wrapper = styled.div`
  justify-self: start;

  @media (min-width: 761px) {
    display: none;
  }
`;

export const DropDownList = styled.ul<{ state: boolean }>`
  position: absolute;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: var(--content-color);
  overflow: hidden;
  transition: 400ms ease;
  opacity: ${({ state }) => (state ? "1" : "0")};
  transform: ${({ state }) => (state ? "translateX(0%)" : "translateX(-100%)")};
  border-bottom-right-radius: 3px;
`;

export const MenuLine = styled.div<{ state: boolean }>`
  width: ${({ state }) => (state ? "70%" : "80%")};
  height: 2px;
  border-radius: 3px;
  background: var(--text-color);
  transition: transform 500ms ease, opacity 300ms ease;
`;

export const TopLine = styled(MenuLine)`
  transform: ${({ state }) =>
    state ? "translateY(7px) rotate(225deg)" : "translateY(0px) rotate(0deg)"};
`;

export const MiddleLine = styled(MenuLine)`
  opacity: ${({ state }) => (state ? 0 : 1)};
`;

export const BottomLine = styled(MenuLine)`
  transform: ${({ state }) =>
    state
      ? "translateY(-7px) rotate(-225deg)"
      : "translateY(0px) rotate(0deg)"};
`;

export const BurgerButtonWrapper = styled(UnStyledButton)`
  margin-left: 6px;
  height: 100%;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 5px;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  :hover {
    span {
      width: 100%;
    }
  }

  @media (max-width: 760px) {
    padding: 0.2em;
    align-items: center;
    :hover {
      span {
        width: 80%;
      }
    }
  }
`;
export const Underline = styled.span`
  width: 0;
  height: 2px;
  background: var(--text-color);
  transition: 300ms ease;
  opacity: 0.8;
  border-radius: 2px;
  position: absolute;
  top: 82%;
`;
