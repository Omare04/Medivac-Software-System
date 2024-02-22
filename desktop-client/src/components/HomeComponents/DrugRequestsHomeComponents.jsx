import React from "react";
import {
  DrugRequestCardItem,
  DrugRequestCardWrapper,
  DrugRequestTitle,
  ItemContainer,
  MoreSpan,
} from "../../styles/ComponentStyles/DrugRequestsStyles";

function DrugRequestsHomeComponents() {
  return (
    <>
      <DrugRequestTitle>Requests</DrugRequestTitle>
      <DrugRequestCardWrapper>
        <DrugRequestCard />
        <DrugRequestCard />
        <DrugRequestCard />
        <DrugRequestCard />
        <DrugRequestCard />
        <DrugRequestCard />
        <DrugRequestCard />
        <DrugRequestCard />
      </DrugRequestCardWrapper>
    </>
  );
}

function DrugRequestCard() {
  return (
    <>
      <DrugRequestCardItem>
        <ItemContainer>
          Bob billy joe
          <span
            style={{
              color: "red",
              paddingLeft: "8px",
              fontSize: "12px",
              paddingTop: "5px",
            }}
          >
            (Pharmaceuticals)
          </span>
          <MoreSpan>more</MoreSpan>
        </ItemContainer>
        <span style={{ color: "grey", fontSize: "14px" }}>
          {" "}
          clincal manager
          <span
            style={{ color: "black", marginLeft: "20px", fontSize: "13px" }}
          >
            Qty: 3
          </span>
        </span>
      </DrugRequestCardItem>
    </>
  );
}

export default DrugRequestsHomeComponents;
