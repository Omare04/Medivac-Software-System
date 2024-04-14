import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

export const HomeWrapperRight = styled.div`
  display: "flex";
  flex-direction: "column";
  padding-left: 10px;
  height: 100%;
  overflow: hidden;
  width: 37%;
`;

export const HomeWrapperLeft = styled.div`
  margin-right: 10px;
  overflow: hidden;
  width: 100%;
`;

export const StyledLinkLogo = styled(FaExternalLinkAlt)`
  color: red;
  stroke-width: 3;
  font-weight: 3;
`;

//DRUG REQUEST SECTION
export const BoxWrapper = styled.div`
  display: "flex";
  overflow-y: auto;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

export const StyledSeeMoreEntries = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(169, 169, 169, 0),
    rgba(227, 227, 227, 0.3)
  );
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;
