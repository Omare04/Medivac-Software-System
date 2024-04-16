import { useEffect, useState } from "react";
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
import TimeGridComponent from "../Components/HomeComponents/TimeGridComponent";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Card,
  Box,
  Spinner,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadingComponent = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

function DelayedComponentSwitch({ tableView }) {
  const [renderedComponent, setRenderedComponent] = useState(
    <MissionTableComponent />
  );

  useEffect(() => {
    // Set LoadingComponent initially
    setRenderedComponent(<LoadingComponent />);

    // Set the actual component after 1 second
    const timeout = setTimeout(() => {
      setRenderedComponent(
        tableView ? <MissionTableComponent /> : <TimeGridComponent />
      );
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, [tableView]);

  return renderedComponent;
}

export function Home() {
  const [tableView, setTableView] = useState(true);
  const [skeletonState, setSkeletonState] = useState(true);
  const [renderComponent, setRenderComponent] = useState(
    <MissionTableComponent />
  );

  useEffect(() => {
    StockServiceApi.get("/hi")
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const switchView = () => {
    setTableView(!tableView);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRenderComponent(<LoadingComponent />);
  //   }, [1000]).then((e) => {
  //     setRenderComponent(
  //       tableView ? <TimeGridComponent /> : <MissionTableComponent />
  //     );
  //   });
  // }, [tableView]);

  const skeletons = Array.from({ length: 10 }, (_, index) => (
    <Skeleton key={index} height="30px" />
  ));

  return (
    <>
      <div style={{ height: "calc(100% - 50px)", padding: "10px" }}>
        <Flex
          justifyContent="space-between"
          display={"flex"}
          height="calc(100% - (40px))"
          id="home-wrapper-root"
          // alignItems="stretch"
          // p={5}
        >
          <HomeWrapperLeft>
            {/* {tableView ? <MissionTableComponent /> : <TimeGridComponent />}
             */}
            <DelayedComponentSwitch tableView={tableView} />
          </HomeWrapperLeft>

          <HomeWrapperRight>
            <Box h={"100%"}>
              <StatsTab />
              <Box display={"flex"} flexDirection={"column"}></Box>
              <TitleContainer>
                <DrugRequestTitle>Requests & Orders</DrugRequestTitle>
              </TitleContainer>
              <DrugRequestsHomeComponents />
            </Box>
            {/* <BoxWrapper> */}
            {/* </BoxWrapper> */}
            {/* <TitleContainer style={{ marginTop: "20px" }}>
            Monthly Flight Volume
          </TitleContainer> */}
            {/* <HorizontalBarChartMission></HorizontalBarChartMission> */}
          </HomeWrapperRight>
          <FunctionalFooter view={switchView} viewState={tableView} />
        </Flex>
      </div>
    </>
  );
}

export default Home;
