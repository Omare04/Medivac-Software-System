import React from "react";
import {
  StyledAccountNavItem,
  StyledHeader,
  StyledNavItem,
  StyledHeaderLogo,
} from "../styles/HeaderStyles";
import { AiOutlineShop, AiOutlineFileSearch } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { GiPlanePilot } from "react-icons/gi";
import { TbUser } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

const universalStyle = {
  size: 16,
  style: { paddingRight: "6px", strokeWidth: 1.2 },
};

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderLogo size={100} />
        <StyledNavItem>
          {/* <Map {...universalStyle} /> */}
          Map
        </StyledNavItem>
        <StyledNavItem>
          {/* <TbUsers {...universalStyle} /> */}
          Personele
        </StyledNavItem>
        <StyledNavItem>
          {/* <AiOutlineShop {...universalStyle} /> */}
          Stock
        </StyledNavItem>
        <StyledNavItem>
          {/* <AiOutlineFileSearch {...universalStyle} /> */}
          Requests
        </StyledNavItem>
        <StyledNavItem>
          {/* <GoChecklist
            {...universalStyle}
            style={{ ...universalStyle.style, strokeWidth: 0.5 }}
          /> */}
          Checklists
        </StyledNavItem>
        <StyledNavItem style = {{}}>
          {/* <LiaAmbulanceSolid {...universalStyle} /> */}
          Logistics
        </StyledNavItem>
        <StyledNavItem style = {{}}>
          {/* <LiaAmbulanceSolid {...universalStyle} /> */}
          Orders
        </StyledNavItem>
        <StyledAccountNavItem>
        <FaUser size = {17}/>
        </StyledAccountNavItem>
      </StyledHeader>
    </>
  );
}

export default Header;
