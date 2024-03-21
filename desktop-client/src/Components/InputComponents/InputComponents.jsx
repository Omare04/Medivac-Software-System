import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Text,
  Select,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

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
          <Select
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
          </Select>
          {/* </div> */}
        </InputGroup>
      </div>
    </>
  );
}
