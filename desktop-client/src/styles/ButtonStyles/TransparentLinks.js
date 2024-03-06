import styled from "@emotion/styled";
import {
  dividerColor,
  dividerColorActive,
  dividerColorHover,
  dividerColorLight,
} from "../../Colors";

const StyledLinkButton = styled.a`
  padding-bottom: 3px;
  padding-top: 3px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease;
  border-radius: 3px;
  background-color: #f3f3f3;
  color: #8a8a8a;

  &:hover {
    background-color: #f7f7f7;
  }

  &:active {
    background-color: white; /* Adjust the active background color accordingly */
  }
`;



export default StyledLinkButton;
