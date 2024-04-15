import React from "react";
import MedicalStockTable from "../../Components/TableComponents/StockTable";
import { StyledTableWrapper } from "../../styles/TableStyles/StockTableStyles";
import {
  Tabs,
  TabList,
  Tab,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Input,
  useDisclosure,
  DrawerCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import StockCheckList from "../../Components/ChecklistComponents/StockCheckLists";
import EntryRemovalTable from "../../Components/TableComponents/EntryRemovalTable";
import { BsPlusSlashMinus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

function MedicalEquipmentStock() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div style={{ height: "calc(100% - 50px)", padding: "10px" }}>
        <div
          id="Medical_equipment_stock_root_wrapper"
          style={{ height: "100%", padding: "5px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
              borderRadius: "5px",
            }}
          >
            <MedicalStockTable />
            {/* <div
            style={{
              margin: " 0px 0px 10px 10px",
              width: "50%",
              height: "100%",
              borderRadius: "5px",
            }}
          >
           
            
              <EntryRemovalTable />
          </div> */}
          </div>
          <Drawer
            onClose={onClose}
            isOpen={isOpen}
            size={"xl"}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>{`Create A New Order`}</DrawerHeader>
              <DrawerBody>{/* <DrawerBodyContent /> */}</DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
}

export default MedicalEquipmentStock;
