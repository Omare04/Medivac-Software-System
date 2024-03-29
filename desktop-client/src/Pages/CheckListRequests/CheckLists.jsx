import React from "react";
import StockCheckList from "../../Components/ChecklistComponents/StockCheckLists";

function CheckLists() {
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        // border: "1px solid grey",
        borderRadius: "5px",
      }}
    >
      <StockCheckList />
    </div>
  );
}

export default CheckLists;
