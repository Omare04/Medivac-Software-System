import React, { useEffect, useState } from "react";
import {
  DrugRequestCardItem,
  DrugRequestCardWrapper,
  DrugRequestTitle,
  ItemContainer,
  MoreSpan,
} from "../../styles/RequestsOrderStyles";
import { dividerColorLight } from "../../Colors";
import { Card, Box, Skeleton } from "@chakra-ui/react";
import { BoxWrapper } from "../../styles/HomeLayout";

function DrugRequestsHomeComponents() {
  return (
    <>
      <RenderDrugRequestCards />
    </>
  );
}

function RenderDrugRequestCards() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      overflow={"auto"}
      height={"100%"}
      pb={4}
      pr={2}
    >
      <DrugRequestCard type={"Pharmaceuticals"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"PO"} Title={"PO022470"} />
      <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"Pharmaceuticals"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"PO"} Title={"PO022470"} />
      <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"} />
      <DrugRequestCard type={"Pharmaceuticals"} Title={"Clinical Manager"} />
    </Box>
  );
}

function DrugRequestCard({ type, Title }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      <Skeleton m={"4px"} isLoaded={isLoaded}>
        <Card p={2}>
          <ItemContainer>
            {Title}
            <span
              style={{
                color:
                  type === "Pharmaceuticals"
                    ? "#f37d7d"
                    : type === "PO"
                    ? "#5da0e3"
                    : "green",
                paddingLeft: "8px",
                fontSize: "12px",
                paddingTop: "5px",
              }}
            >
              ({type})
            </span>
            <MoreSpan onClick={() => {}}>more</MoreSpan>
          </ItemContainer>
          <span style={{ color: "grey", fontSize: "12px", display: "flex" }}>
            {" "}
            clincal manager
            <span
              style={{
                color: "black",
                marginLeft: "auto",
                fontSize: "12px",
                fontWeight: "350",
              }}
            >
              qty: 3
            </span>
          </span>
        </Card>
      </Skeleton>
    </>
  );
}

export default DrugRequestsHomeComponents;
