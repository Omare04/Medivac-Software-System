import React from "react";
import Header from "../Layout/Header";
import {
  HomeWrapperRight,
  HomeWrapperLeft,
  BoxWrapper,
} from "../styles/HomeLayout";
import { StatsTab } from "../components/HomeComponents/HomeStatistics";
import { Divider, Flex } from "@chakra-ui/react";
import DrugRequestsHomeComponents from "../components/HomeComponents/DrugRequestsHomeComponents";

function Home() {
  return (
    <>
      <Header />
      <Flex justifyContent="space-between" height="100%">
        <HomeWrapperLeft>aa</HomeWrapperLeft>
        <HomeWrapperRight>
          <StatsTab />
          <Divider color="red" mt={4} borderColor={"red"} />

          <BoxWrapper>
            <DrugRequestsHomeComponents />
          </BoxWrapper>
        </HomeWrapperRight>
      </Flex>
    </>
  );
}

export default Home;
