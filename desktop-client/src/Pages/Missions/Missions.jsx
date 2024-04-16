import React from "react";
import MissionTableComponent from "../../Components/TableComponents/MissionTable";
import styled from "styled-components";
import HorizontalBarChartMission from "../../Components/StatComponents/StatComponents";
import { MissionsByAircraftStat } from "../../Components/StatComponents/MissionStatComponents";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { dividerColorLight } from "../../Colors";

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-right: 20px;
  padding-left: 50px;
  padding-bottom: 5px;
  font-size: 20px;
  border-bottom: 1px solid ${dividerColorLight};
`;

function Missions() {
  return (
    <>
      <div style={{ height: "calc(100% - 50px)", padding: "10px" }}>
        <div style={{ width: "100%", display: "flex", height: "100%" }}>
          <div
            style={{
              width: "60%",
              marginLeft: "10px",
            }}
          >
            {/* <MissionTableComponent /> */}
          </div>
          <div style={{ width: "40%", marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                paddingTop: "20px",
                paddingLeft: "40px",
                paddingRight: "20px",
                borderBottom: `1px solid ${dividerColorLight}`,
              }}
            >
              <Stat>
                <StatLabel>Missions This Month</StatLabel>
                <StatNumber>3</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36% Last Month
                </StatHelpText>
              </Stat>
              <MissionsByAircraftStat />
            </div>
            <TitleContainer style={{ marginTop: "20px", width: "100%" }}>
              Monthly Flight Volume
            </TitleContainer>
            <HorizontalBarChartMission></HorizontalBarChartMission>
          </div>
        </div>
      </div>
    </>
  );
}

export default Missions;
