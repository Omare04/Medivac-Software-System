import React, { useState, useEffect } from "react";
import StockCheckList from "../../Components/ChecklistComponents/StockCheckLists";
import { AddChecklistItemModal } from "../../Components/Modals/ChecklistRequestModals";
import { SearchBarComponent } from "../../Components/InputComponents/InputComponents";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'


function CheckLists() {
  const [modalState, setModalState] = useState(false);

  const handleOpenModal = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        // border: "1px solid grey",
        borderRadius: "5px",
      }}
    >
      <StockCheckList onOpen={handleOpenModal} />
      <AddChecklistItemModal isOpen={modalState} onClose={handleCloseModal} />
    </div>
  );
}

const FilterBar = () => {
  return (
    <Box display={"flex"} w={"100%"} gap={2}>
      <SearchBarComponent />
    </Box>
  );
};

export default CheckLists;
