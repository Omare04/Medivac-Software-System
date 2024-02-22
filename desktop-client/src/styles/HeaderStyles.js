import styled from "styled-components";
import { GiAirplane } from "react-icons/gi";

//HEADER
export const StyledHeaderWrapper = styled.div``;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #2e2e38;
  width: 100%;
  height: 50px;
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
  margin-left: 5px;
  padding-right: 26px;
  margin-left: auto;

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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
  height: 100%;
  padding-left: 23px;
  padding-right: 23px;
  font-size: 13.5px;

  &:hover {
    background-color: #313139;
    color: #cccccc;
    transform: scale(1);
  }

  &:active {
    background-color: #2b2b32cc;
    transform: scale(0.99);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 34%; /* Adjust this value to control the height of the borders */
    bottom: 34%; /* Adjust this value to control the height of the borders */
    width: 0.7px; /* Adjust this value to control the width of the borders */
    background-color: #434352; /* Adjust the border color as needed */
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

//STYLED HEADER LOGO

export const StyledHeaderLogo = styled(GiAirplane)`
  stroke-width: 2;
  color: #46afcf;
  padding-left: 30px;
  padding-right: 30px;
`;
