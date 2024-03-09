import styled from "styled-components";
import { dividerColor, dividerColorLight } from "../Colors";
import { FaExternalLinkAlt } from "react-icons/fa";
import { buttonBlue } from "../Colors";

//HOME COMPONENTS
export const DrugRequestCardWrapper = styled.ul`
  overflow-y: scroll;
  height: 100%;
  list-style-type: none;
  width: 100%;
`;

export const DrugRequestCardItem = styled.li`
  display: flex;
  /* align-items: center; */
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 6px;
  padding-top: 6px;
  padding-left: 2px;
  border-bottom: 1px solid ${dividerColorLight};
`;

export const DrugRequestTitle = styled.h1`
  font-size: 17px;
  width: 100%;
  border-bottom: 1px solid ${dividerColorLight};
  margin-bottom: 6px;
  padding-bottom: 3px;
  font-weight: 360;
  color: black;
`;

export const ItemContainer = styled.div`
  font-size: 13.7px;
  font-weight: 420;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MoreSpan = styled.span`
  color: grey;
  font-size: 14px;
  margin-left: auto;
  color: #3182ce;
`;

//Order Card Styles

export const OrderHomeTitle = styled.h1`
  font-size: 17px;
  width: 50%;
  border-bottom: 1px solid ${dividerColorLight};
  margin-bottom: 6px;
  padding-bottom: 3px;
  font-weight: 360;
  color: black;
`;

export const OrderCardWrapper = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
`;

export const OrderCardItem = styled.li`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 5.5px;
  padding-top: 9px;
  border-bottom: 1px solid ${dividerColorLight};
`;

export const StyledLinkIcon = styled(FaExternalLinkAlt)`
  font-size: 0.8em;
  color: ${buttonBlue};
  cursor: pointer;

  &:hover {
    color: darken(${buttonBlue}, 50%);
  }

  &:active {
    color: lighten(${buttonBlue}, 20%);
  }
`;
