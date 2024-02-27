import styled from "styled-components";
import { useState } from "react";
import { dividerColorLight, footerColor } from "../../Colors";
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 180px; 
  font-weight: 450;
  cursor: pointer;
  background-color: ${footerColor};
  color: #fff; /* Text color, adjust as needed */
  transition: background-color 0.1s ease;




  &:hover {
    background-color: #3498ad; /* Change color on hover */
  }

  &:active {
    background-color: #267c8c; /* Change color on click */
  }

  &:focus {
    outline: none;
  }

`;

export function IconButton({ Title, Icon }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const dropdownVal = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <StyledButton
        name="product"
        onChange={(e) => dropdownVal(e.target.value)}
      >
        {Icon}
        {Title}
      </StyledButton>
    </>
  );
}
