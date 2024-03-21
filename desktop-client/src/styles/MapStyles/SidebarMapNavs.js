import styled from "styled-components";

export const SideNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: flex-start;
  color: white; 
  padding: 10px;
  padding-right: 10px;
  padding-left: 0px;
  overflow: "auto";
`;

export const StyledSideNavCardItemList = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

export const StyledSideNavCardItemListItem = styled.li`
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;
`;
