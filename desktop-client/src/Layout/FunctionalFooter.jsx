import React from "react";
import { FunctionalFooterWrapper } from "../styles/FooterStyles";
import { IconButton } from "../Components/InputComponents/ButtonComponents";
import { IoMap } from "react-icons/io5";
import AddMissionPage from "../Pages/Missions/AddMissionPage";

function FunctionalFooter() {

  return (
    <FunctionalFooterWrapper>
      <AddMissionPage />
      <IconButton
        Title={"View Map"}
        Icon={<IoMap style={{ marginRight: "10px" }} />}
      />
    </FunctionalFooterWrapper>
  );
}

export default FunctionalFooter;
