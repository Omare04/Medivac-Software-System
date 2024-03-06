import React from "react";
import MedicalStockTable from "../../Components/TableComponents/StockTable";
import { StyledTableWrapper } from "../../styles/TableStyles/StockTableStyles";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function MedicalEquipmentStock() {
  return (
    <>
        <p
          style={{
            fontWeight: "350",
            borderBottom: `1px solid #ededed`,
            paddingBottom: "5px",
            marginTop: "18px",
            width: "90%",
            marginLeft: "18px",
            color: "#5f5f5f",
            fontSize: "22px",
          }}
        >
          Medical Equipment Stock
        </p>
      <StyledTableWrapper>
        <MedicalStockTable />
      </StyledTableWrapper>
    </>
  );
}

export default MedicalEquipmentStock;
