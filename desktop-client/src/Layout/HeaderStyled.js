import styled from "styled-components";
import { Terminal } from "react-feather";

//HEADER
export const StyledHeaderWrapper = styled.div``;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #2e2e38;
  width: 100%;
  height: 60px;
`;

//ACCOUNT NAV
export const StyledAccountNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
  height: 100%;
  padding-left: 26px;
  margin-left: 10px; 
  padding-right: 26px;

  &:hover {
    background-color: #313139;
    color: #cccccc;
    transform: scale(1);
  }

  &:active {
    background-color: #2b2b32cc;
    transform: scale(0.99);
  }
`;

//HEADER NAV ITEMS
export const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 15px;

  &:hover {
    background-color: #313139;
    color: #cccccc;
    transform: scale(1);
  }

  &:active {
    background-color: #2b2b32cc;
    transform: scale(0.99);
  }
`;

//STYLED HEADER LOGO

export const StyledHeaderLogo = styled(Terminal)`
  stroke-width: 2;
  padding-right: 10px;
  color: #46afcf;
  margin-right: auto;
  padding-left: 30px; 
`;
