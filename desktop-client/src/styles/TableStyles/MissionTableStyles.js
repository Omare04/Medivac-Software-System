import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import { Input } from "@chakra-ui/react";
import { dividerColor, dividerColorLight } from "../../Colors";

export const MissionTableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding-right: 125px;
  overflow-y: auto;
`;

export const MissionTableHeader = styled.th`
  position: sticky;
  top: 0;
  background-color: #f2f2f2;
  padding-right: 10px;
  padding-top: 10px;
  text-align: center;
  font-weight: 485;
  font-size: 15px;
  /* height: 100%; */
`;

export const MissionTableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${dividerColorLight};
  }
  /* height: 100%; */
  border: 1px solid #eeeeee;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #eeeeee;
  }
`;

export const MissionTableData = styled.td`
  padding: 4px;
  font-size: 14px;
`;

//FILTER BAR

export const StyledTableFilterBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  width: 100%;
  height: 40px;
`;

export const StyledSearchInput = styled(Input)`
  flex: 1;
  padding-left: 20px;
  text-align: right;
  border: none;
  outline: none;
`;

export const StyledSearchIcon = styled(IoMdSearch)`
  margin-right: 5px;
  margin-left: 5px;
`;

export const StyledSearch = styled.input`
  outline: none;
  width: 100%;
  font-size: 14.9px;
  padding-left: 15px;
  padding: 5px;
  color: #434343;
  background-color: ${dividerColorLight};
  border: none;
  border-radius: 3px;

  &::placeholder {
    color: #4a4a4a;
    opacity: 0.7;
  }

  /* Styling the clear (X) button for WebKit-based browsers */
  &::-webkit-search-cancel-button {
    position: relative;
    width: 15px;
    height: 25px;
    padding-right: 5px;
    background-color: black;
    background-size: 12px 12px;

    transition: background-color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #a9a9a9;
    }
  }

  &::-ms-clear {
    display: none; /* Hide the default clear button */
  }
`;

export const StyledSearchBox = styled.div`
  /* display: grid; */
  height: 100%;
  display: flex;
  margin-right: 10px;
  /* width: 100%; */
`;

export const StyledSearchIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 100%;
  background-color: ${dividerColorLight};
`;
