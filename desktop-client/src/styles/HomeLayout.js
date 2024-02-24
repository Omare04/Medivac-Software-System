import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

export const HomeWrapperRight = styled.div`
  height: 100%;
  width: 40%;
  margin-right: 7px;
`;

export const HomeWrapperLeft = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;
  width: 100%;
`;

export const StyledLinkLogo = styled(FaExternalLinkAlt)`
  color: red;
  stroke-width: 3;
  font-weight: 3;
`;

//DRUG REQUEST SECTION
export const BoxWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  width: 100%;
  padding-right: 16px;
  border-radius: 5px;
  margin-right: 15px;
  padding-left: 20px;
`;

export const StyledSeeMoreEntries = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(169, 169, 169, 0),
    rgba(227, 227, 227, 0.5)
  );
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
