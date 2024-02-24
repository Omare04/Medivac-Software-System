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
import { FaUser } from "react-icons/fa";
import { PiBellSimpleFill } from "react-icons/pi";
import { HeaderNavData } from "./HeaderNavData";
import { Link } from "react-router-dom";

const universalStyle = {
  size: 16,
  style: { paddingRight: "6px", strokeWidth: 1.2 },
};

function Header() {
  return (
    <>
      <StyledHeader>
        <Link to={"/"}>
          <StyledHeaderLogo size={100} />
        </Link>
        {HeaderNavData.map((value, index) => (
          <Link to={value.route}>
            <StyledNavItem key={index}>{value.title}</StyledNavItem>
          </Link>
        ))}
      </StyledHeader>
    </>
  );
}

export default Header;
