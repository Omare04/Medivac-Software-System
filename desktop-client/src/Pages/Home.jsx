import React from "react";
import Header from "../Layout/Header";
import {
  HomeWrapperRight,
  HomeWrapperLeft,
  BoxWrapper,
} from "../styles/HomeLayout";
import { StatsTab } from "../Appcomponents/HomeComponents/HomeStatistics";
import { Divider, Flex } from "@chakra-ui/react";
import DrugRequestsHomeComponents from "../Appcomponents/HomeComponents/DrugRequestsHomeComponents";
import { dividerColorLight } from "../Colors";
import OrderComponentsHome from "../Appcomponents/HomeComponents/OrderComponentsHome";
import {
  DrugRequestTitle,
  OrderHomeTitle,
  StyledLinkIcon,
} from "../styles/RequestsOrderStyles";
import styled from "styled-components";
import MissionTableComponent from "../Appcomponents/TableComponents/MissionTable";
import FunctionalFooter from "../Layout/FunctionalFooter";
import HorizontalBarChartMission from "../Appcomponents/StatComponents/StatComponents";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
`;

export function Home() {
  return (
    <>
      <Flex justifyContent="space-between" height="100%">
        <HomeWrapperLeft>
          <MissionTableComponent />
        </HomeWrapperLeft>
        <HomeWrapperRight>
          <StatsTab />
          <TitleContainer>
            <DrugRequestTitle>Requests & Orders</DrugRequestTitle>
          </TitleContainer>
          <BoxWrapper>
            <DrugRequestsHomeComponents />
          </BoxWrapper>
          {/* <TitleContainer style={{ marginTop: "20px" }}>
            Monthly Flight Volume
          </TitleContainer> */}
          {/* <HorizontalBarChartMission></HorizontalBarChartMission> */}
          {/* <DrugRequestTitle style={{ paddingLeft: "20px", paddingTop: "15px" }}>
            Orders
          </DrugRequestTitle>
          <BoxWrapper>
        <OrderComponentsHome />
        </BoxWrapper> */}
        </HomeWrapperRight>
      </Flex>
      <FunctionalFooter />
    </>
  );
}

export default Home;
