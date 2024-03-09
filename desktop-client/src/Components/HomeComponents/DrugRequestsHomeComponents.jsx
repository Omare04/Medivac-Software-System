import React from "react";
import {
  DrugRequestCardItem,
  DrugRequestCardWrapper,
  DrugRequestTitle,
  ItemContainer,
  MoreSpan,
} from "../../styles/RequestsOrderStyles";
import { dividerColorLight } from "../../Colors";

function DrugRequestsHomeComponents() {
  return (
    <>
      <DrugRequestCardWrapper>
        <DrugRequestCard type={"Pharmaceuticals"} Title={"Clinical Manager"} />
        <DrugRequestCard type={"PO"} Title={"PO022470"} />
        <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"}/>
        <DrugRequestCard type={"Pharmaceuticals"} Title={"Clinical Manager"} />
        <DrugRequestCard type={"PO"} Title={"PO022470"} />
        <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"}/>
        <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"}/>
        <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"}/>
        <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"}/>
        <DrugRequestCard type={"Medical Equipment"} Title={"Clinical Manager"}/>
        <DrugRequestCard type={"Pharmaceuticals"} Title={"Clinical Manager"} />
        {/* <DrugRequestCard type={"Medical Equipment"} /> */}
      </DrugRequestCardWrapper>
    </>
  );
}

function DrugRequestCard({ type, Title }) {
  return (
    <>
      <DrugRequestCardItem>
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
      </DrugRequestCardItem>
    </>
  );
}

export default DrugRequestsHomeComponents;
