import React from "react";
import StockCheckList from "../../Components/ChecklistComponents/StockCheckLists";

function CheckLists() {
  return (
    <div>
      {" "}
      <div
        style={{
          width: '100%',
          marginTop: "10px",
          // border: "1px solid grey",
          borderRadius: "5px",
        }}
      >
        <StockCheckList />
      </div>
    </div>
  );
}

export default CheckLists;
