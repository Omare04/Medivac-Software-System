import React from "react";
import {
  StyledAccountNavItem,
  StyledHeader,
  StyledNavItem,
  StyledHeaderLogo,
} from "./HeaderStyled";
import { User } from "react-feather";
import { Map } from "react-feather";

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderLogo size ={32}/>
        <StyledNavItem>
          <Map size={20} style={{ paddingRight: "10px", strokeWidth: 1.2 }} />
          Map
        </StyledNavItem>
        <StyledNavItem>Route</StyledNavItem>
        <StyledNavItem>Route</StyledNavItem>
        <StyledAccountNavItem>
          <User size={25} />
        </StyledAccountNavItem>
      </StyledHeader>
    </>
  );
}

export default Header;
