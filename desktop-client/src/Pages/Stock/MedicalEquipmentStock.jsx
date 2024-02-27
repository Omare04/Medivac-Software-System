import React from "react";
import MedicalStockTable from "../../Appcomponents/TableComponents/StockTable";
import {StyledTableWrapper} from "../../styles/TableStyles/StockTableStyles";

function MedicalEquipmentStock() {
  return (
    <>
      <StyledTableWrapper>
        <MedicalStockTable />
      </StyledTableWrapper>
    </>
  );
}

export default MedicalEquipmentStock;
