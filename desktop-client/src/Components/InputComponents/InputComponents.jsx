import React from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Text,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { Select as ChakraSelect } from "@chakra-ui/react";
import Select from "react-select";

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
      <div>
        <Text>{title}</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          <Input
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
      <div>
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
