import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Text,
  InputLeftAddon,
  Textarea,
  Radio,
  Select,
  RadioGroup,
} from "@chakra-ui/react";
import { Select as ChakraSelect } from "@chakra-ui/react";
import ReactFlagsSelect from "react-flags-select";
import { dividerColor, dividerColorLight } from "../../Colors";
import { FaSearch } from "react-icons/fa";
import ReactSelect from "react-select"; // Import with alias

export function InputComponentIcon({
  icon,
  title,
  placeholder,
  type,
  value,
  onChange,
  isTitle,
}) {
  return (
    <>
      <div style={{ width: "100%" }}>
        {isTitle ? <Text>{title}</Text> : null}
        <InputGroup>
          <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          <Input
            background={"white"}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
          />
        </InputGroup>
      </div>
    </>
  );
}

export function InputComponentSelectRight({
  icon,
  title,
  placeholder,
  type,
  value,
  onChange,
  selectItems,
  selectPlaceHolder,
}) {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Text>{title}</Text>
        <InputGroup size="md">
          <InputLeftAddon>{icon}</InputLeftAddon>
          <Input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            borderTopRightRadius="0"
            borderBottomRightRadius="0"
            borderLeftColor={"white"}
          />
          {/* <div> */}
          <ChakraSelect
            placeholder={selectPlaceHolder}
            width="40%"
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
          >
            {selectItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </ChakraSelect>
          {/* </div> */}
        </InputGroup>
      </div>
    </>
  );
}

export function CountrySelectComponent({ value, onSelect, title }) {
  const [selectedCountry, setSelectedCountry] = useState(value);

  const handleCountrySelect = (code) => {
    setSelectedCountry(code);
    onSelect(code);
  };

  return (
    <>
      <div id="country_select_component" style={{ width: "100%" }}>
        <Text>{title}</Text>
        <ReactFlagsSelect
          selected={selectedCountry}
          onSelect={handleCountrySelect}
        />
      </div>
    </>
  );
}

export function MultiSelectComponent({
  selectOptions,
  placeholder,
  title,
  selectedOptions,
  setSelectedOptions,
}) {
  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  return (
    <>
      <div>
        <Text>{title}</Text>
        <ChakraSelect
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix={placeholder}
          options={selectOptions}
          value={selectedOptions}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export function ReactSelectComponent({
  selectOptions,
  placeholder,
  title,
  selectedOptions,
  setSelectedOptions,
  isTitle,
  isMulti,
  customStyles,
}) {
  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        {isTitle ? <Text>{title}</Text> : null}
        <ReactSelect
          // name="colors"
          isMulti={isMulti}
          className="basic-multi-select"
          options={selectOptions}
          value={selectedOptions}
          onChange={handleChange}
          placeholder={placeholder}
          styles={{
            control: (provided, state) => ({
              ...provided,
              // zIndex: 1,
              borderColor: "#e2e8f0", // Change border color to red
            }),
            // Other style overrides...
          }}
          // styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </>
  );
}

export function InputComponentTextArea({
  title,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <>
      <Text>{title}</Text>
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        resize={"none"}
        height={"82%"}
        background={"white"}
      />
    </>
  );
}

export function InputComponentRadio({ title, value, onChange }) {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Text>{title}</Text>
        <RadioGroup onChange={onChange} value={value} display={"flex"} pt={2}>
          <Stack spacing={4} direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </div>
    </>
  );
}

export function ChakraSelectComponentIcon({
  icon,
  selectPlaceHolder,
  selectItems,
}) {
  return (
    <div style={{ width: "100%" }}>
      <InputGroup size="md">
        <InputLeftAddon
          children={icon}
          background={dividerColorLight}
          border={"none"}
          color={"grey"}
        />
        <ChakraSelect
          placeholder={selectPlaceHolder}
          background={dividerColorLight}
          border={"none"}
          // icon={icon}
          borderLeftRadius={0}
        >
          {selectItems.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </ChakraSelect>
      </InputGroup>
    </div>
  );
}
export function SearchBarComponent({ onChange }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <InputGroup background={"white"} borderRadius={5}>
      <InputLeftElement colorScheme="whiteAlpha" pointerEvents="none">
        {" "}
        <FaSearch style={{ color: "#96989a" }} />
      </InputLeftElement>
      <Input
        background={"white"}
        borderRadius={5}
        colorScheme="whiteAlpha"
        placeholder="Search Product Name"
        value={search}
        onChange={handleSearch}
      />
    </InputGroup>
  );
}
