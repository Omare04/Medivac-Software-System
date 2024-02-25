import React from "react";
import {
  StyledAccountNavItem,
  StyledHeader,
  StyledNavItem,
  StyledRightSideNavItem,
  StyledHeaderLogo,
  StyledBellIcon,
} from "../styles/HeaderStyles";
import { AiOutlineShop, AiOutlineFileSearch } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { GiPlanePilot } from "react-icons/gi";
import { TbUser } from "react-icons/tb";
import { PiBellSimpleFill } from "react-icons/pi";
import { HeaderNavData } from "./HeaderNavData";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import styled from "styled-components";

const universalStyle = {
  size: 16,
  style: { paddingRight: "6px", strokeWidth: 1.2 },
};

const StyledHeaderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #46afcf;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
  height: 100%;
  padding-left: 26px;
  margin-left: 5px;
  padding-right: 26px;
`;

const StyledNavItemLinks = styled(Link)`
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
  font-size: 14px;
  text-decoration: none;
  font-weight: normal;
  &:hover {
    background-color: #313139;
    color: #cccccc;
    transform: scale(1); /* Adjust the scaling factor as needed */
  }

  &:active {
    background-color: #2b2b32cc;
    transform: scale(0.99); /* Adjust the scaling factor as needed */
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderLogoLink to={"/"}>
          <GiAirplaneDeparture size={30} />
        </StyledHeaderLogoLink>

        {HeaderNavData.map((value, index) => (
          <StyledNavItemLinks to={value.route}>
            {value.title}
          </StyledNavItemLinks>
        ))}
        <StyledRightSideNavItem>
          <StyledBellIcon />
          <StyledAccountNavItem>
            <FaUser style={{ color: "white" }} />
          </StyledAccountNavItem>
        </StyledRightSideNavItem>
      </StyledHeader>
    </>
  );
}

export default Header;
