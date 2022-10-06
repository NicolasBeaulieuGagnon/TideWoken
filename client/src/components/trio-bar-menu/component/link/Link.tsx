//styles
import { UnStyledButton } from "../../../../StyledComponents/Common.styled-components";
import {
  StyledLink,
  Underline,
} from "../../../../StyledComponents/TriBarMenu.styled-components";

//types
import { ISiteLink } from "../../../../utils/siteLinks";

const Link = ({ name, targetId, callback }: ISiteLink) => {
  return (
    <StyledLink smooth={true} to={targetId}>
      <UnStyledButton onClick={() => callback && callback()}>
        {name}
      </UnStyledButton>
      <Underline />
    </StyledLink>
  );
};

export default Link;
