import styled from "styled-components";
import { GlobalWrapper } from "./Common.styled-components";

export const NavWrapper = styled(GlobalWrapper)`
  position: fixed;
  top: 0;
  background: var(--content-color);
  height: 4rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: 40px;
  align-content: center;
  box-shadow: var(--sharp-shadow);
  z-index: 100;

  @media (max-width: 760px) {
    height: 3rem;
  }
`;
export const Text = styled.p`
  font-size: 13px;
  gap: 3px;
  @media (max-width: 1000px) {
    flex-direction: column;
    font-size: 12px;
    line-height: 12px;
    gap: 0;
  }
`;

export const LogoStyles = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  margin-left: 1%;
  border-radius: 2px;
  padding: 1px 3px;
  @media (max-width: 760px) {
    justify-self: center;
  }
`;

export const Line = styled.div`
  height: 24px;
  width: 2px;
  border-radius: 15px;
  background: var(--text-color);
  margin: 0 5px;
  @media (max-width: 760px) {
    height: 30px;
  }
`;

export const PhoneNumber = styled.div`
  font-size: 11px;
  line-height: 9px;
  @media (max-width: 760px) {
    display: none;
  }
`;
