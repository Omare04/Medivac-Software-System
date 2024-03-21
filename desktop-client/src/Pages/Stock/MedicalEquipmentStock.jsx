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
      <div
        id="Medical_equipment_stock_root_wrapper"
        style={{ height: "calc(100% - (60px))", padding: "5px" }}
      >
        <p
          style={{
            fontWeight: "350",
            borderBottom: `1px solid #ededed`,
            paddingBottom: "5px",
            marginBottom: "8px",
            width: "100%",
            paddingLeft: "5px",
            color: "#000000",
            fontSize: "22px",
          }}
        >
          Medical Equipment Stock
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
            padding: "15px",
            // background: "#f5f5f5",
            borderRadius: "5px",
          }}
        >
          <MedicalStockTable />
          {/* <div
            style={{
              margin: " 0px 0px 10px 10px",
              width: "100%",
              height: "100%",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                height: "50%",
                overflow: "auto",
                marginBottom: "10px",
                // border: "1px solid grey",
                borderRadius: "5px",
                background: "white",
              }}
            >
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "400",
                  borderBottom: `1px solid #f6f6f6`,
                  borderRadius: "5px",
                  marginBottom: "5px",
                  marginLeft: "5px",
                  color: "#000000",
                  fontSize: "20px",
                  padding: "10px",
                }}
              >
                Entry Removal History
                <BsPlusSlashMinus
                  style={{ marginLeft: "15px" }}
                />
              </h1>
              <EntryRemovalTable />
            </div>
            <div
              style={{
                height: "49%",
                marginTop: "10px",
                // border: "1px solid grey",
                borderRadius: "5px",
              }}
            >
              <StockCheckList />
            </div>
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
            <DrawerBody>
              {/* <DrawerBodyContent /> */}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default MedicalEquipmentStock;
