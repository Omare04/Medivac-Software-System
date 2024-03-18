import { useEffect } from "react";
import React from "react";
import Header from "../Layout/Header";
import {
  HomeWrapperRight,
  HomeWrapperLeft,
  BoxWrapper,
} from "../styles/HomeLayout";
import { StatsTab } from "../Components/HomeComponents/HomeStatistics";
import { Divider, Flex } from "@chakra-ui/react";
import DrugRequestsHomeComponents from "../Components/HomeComponents/DrugRequestsHomeComponents";
import { dividerColorLight } from "../Colors";
import OrderComponentsHome from "../Components/HomeComponents/OrderComponentsHome";
import {
  DrugRequestTitle,
  OrderHomeTitle,
  StyledLinkIcon,
} from "../styles/RequestsOrderStyles";
import styled from "styled-components";
import MissionTableComponent from "../Components/TableComponents/MissionTable";
import FunctionalFooter from "../Layout/FunctionalFooter";
import HorizontalBarChartMission from "../Components/StatComponents/StatComponents";
import { StockServiceApi } from "./Personele/Personnel";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export function Home() {
  useEffect(() => {
    StockServiceApi.get("/hi")
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Flex
        justifyContent="space-between"
        height="calc(100% - (40px))"
        id="home-wrapper-root"
        alignItems="stretch"
        // p={5}
      >
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
        <FunctionalFooter />
      </Flex>
    </>
  );
}

export default Home;
