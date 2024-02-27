import React from "react";
import { FunctionalFooterWrapper } from "../styles/FooterStyles";
import { IconButton } from "../Appcomponents/InputComponents/ButtonComponents";
import { FaPlus } from "react-icons/fa6";
import { IoMap } from "react-icons/io5";

function FunctionalFooter() {
  return (
    <FunctionalFooterWrapper>
      <IconButton
        Title={"Create Mission"}
        Icon={<FaPlus style={{ marginRight: "7px" }} />}
      />
      <IconButton
        Title={"View Map"}
        Icon={<IoMap style={{ marginRight: "10px" }} />}
      />
    </FunctionalFooterWrapper>
  );
}

export default FunctionalFooter;
