import styled from "styled-components";
import { GiAirplane } from "react-icons/gi";
import { PiBellSimpleFill } from "react-icons/pi";
import { whiteContranstOnActive, whiteContranstOnHover } from "../Colors";
import { FaBell } from "react-icons/fa";
import { dividerColorLight, dividerColor } from "../Colors";

//HEADER
export const StyledHeaderWrapper = styled.div``;

export const StyledHeader = styled.div`
  display: flex;
  position: sticky;
  z-index: 1000;
  top: 0;
  align-items: center;
  justify-content: flex-start;
  background-color: #f1f1f1;
  color: "black";
  width: 100%;
  height: 50px;
`;

//NOTIFICATION BELL & Account item wrapper
export const StyledRightSideNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: auto;
`;

export const StyledBellIcon = styled(FaBell)`
  font-size: 16px;
  /* margin-right: 20px; */
  color: "black";
  background: "red";
  cursor: pointer;
  /* color: #fff; */
  transition: color 0.2s ease;

  &:hover {
    color: ${whiteContranstOnHover};
  }

  &:active {
    color: ${whiteContranstOnActive};
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
    top: 34%;
    bottom: 34%;
    width: 0.7px;
    background-color: #434352;
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
