import React from "react";
import { FunctionalFooterWrapper } from "../styles/FooterStyles";
import { IconButton } from "../Components/InputComponents/ButtonComponents";
import { IoMap } from "react-icons/io5";
import AddMissionPage from "../Pages/Missions/AddMissionPage";
import { CiViewTimeline } from "react-icons/ci";
import { MdViewTimeline, MdTableChart } from "react-icons/md";

function FunctionalFooter({ view, viewState }) {
  return (
    <FunctionalFooterWrapper>
      <AddMissionPage />
      <IconButton
        Title={"View Map"}
        Icon={<IoMap style={{ marginRight: "10px" }} />}
      />
      <IconButton
        Title={"Switch View"}
        Icon={
          viewState ? (
            <MdViewTimeline style={{ marginRight: "10px" }} size={20} />
          ) : (
            <MdTableChart style={{ marginRight: "10px" }} size={20} />
          )
        }
        onClickFunc={view}
      />
    </FunctionalFooterWrapper>
  );
}

export default FunctionalFooter;
