import styled from "styled-components";
import { useState } from "react";
import { dividerColorLight } from "../../Colors";
import { IoIosAirplane } from "react-icons/io";

const Styledselect = styled.select`
  background-color: ${dividerColorLight};
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
  height: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export function DropDownComp({ title, options_data, placeholderprop }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const dropdownVal = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <Styledselect
        name="product"
        onChange={(e) => dropdownVal(e.target.value)}
      >
        <option value="" disabled selected>
          {placeholderprop}
        </option>
        {/* Add your options here based on options_data */}
      </Styledselect>
    </>
  );
}

export function IconDropDown({ title, options_data, placeholderprop, Icon }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const dropdownVal = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      {Icon}
      <Styledselect
        name="product"
        onChange={(e) => dropdownVal(e.target.value)}
      >
        <option value="" disabled selected>
          {placeholderprop}
        </option>
        {/* Add your options here based on options_data */}
      </Styledselect>
    </>
  );
}
