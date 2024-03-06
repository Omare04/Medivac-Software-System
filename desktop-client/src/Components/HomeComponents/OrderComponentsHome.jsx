import React from "react";
import {
  OrderCardItem,
  OrderCardWrapper,
  ItemContainer,
} from "../../styles/RequestsOrderStyles";

import { Input } from "@chakra-ui/react";

export default function OrderComponentsHome() {
  return (
    <OrderCardWrapper>
      <OrderHomeCard />
      <OrderHomeCard />
      <OrderHomeCard />
      <OrderHomeCard />
    </OrderCardWrapper>
  );
}

function OrderHomeCard() {
  return (
    <>
      <OrderCardItem>
        <ItemContainer>
          PO022409
          <span
            style={{
              paddingLeft: "0px",
              fontSize: "12px",
              paddingTop: "5px",
            }}
          ></span>
          <span
            style={{
              color: "grey",
              fontSize: "13px",
              marginLeft: "auto",
            }}
          >
            (02/04/2024)
          </span>
        </ItemContainer>
      </OrderCardItem>
    </>
  );
}
