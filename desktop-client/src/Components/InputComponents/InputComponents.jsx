import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Text,
  InputLeftAddon,
  Textarea,
  InputRightAddon,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Select as ChakraSelect } from "@chakra-ui/react";
import Select from "react-select";
import ReactFlagsSelect from "react-flags-select";

export function InputComponentIcon({
  icon,
  title,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Text>{title}</Text>
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
        <Select
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
}) {
  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Text>{title}</Text>
        <Select
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
