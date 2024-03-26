import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  useSteps,
} from "@chakra-ui/react";
import { IconButton } from "../../Components/InputComponents/ButtonComponents";
import { FaPlus } from "react-icons/fa6";
import FlightInfoPage from "./FlightInfoPage";
import CrewInfoPage from "./CrewInfoPage";
import PatientInfoPage from "./PatientInfoPage";
import ArrivalInfoPage from "./ArrivalInfoPage";
import { buttonBlue } from "../../Colors";
import DrugsEquipmentPage from "./DrugsEquipmentPage";
import MissionSummaryPage from "./MissionSummaryPage";
import { MdDone } from "react-icons/md";

function RenderPages({ page }) {
  switch (page) {
    case 0:
      return <FlightInfoPage />;
    case 1:
      return <CrewInfoPage />;
    case 2:
      return <DrugsEquipmentPage />;
    case 3:
      return <PatientInfoPage />;
    case 4:
      return <ArrivalInfoPage />;
    case 5:
      return <MissionSummaryPage />;
    default:
      return null; // Handle invalid page case
  }
}

function AddMissionPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(0);

  const steps = [
    { title: "1", description: "Flight Info" },
    { title: "2", description: "Crew Info" },
    { title: "3", description: "Drugs & Equipment" },
    { title: "4", description: "Patient Info" },
    { title: "5", description: "Arrival Info" },
    { title: "6", description: "Summary" },
  ];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <IconButton
        Title={"Create Mission"}
        Icon={<FaPlus style={{ marginRight: "7px" }} />}
        onClickFunc={onOpen}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader
            borderBottomWidth="1px"
            background={"#2e2e38"}
            color={"white"}
            p={3}
            pl={5}
          >
            Create Mission
          </DrawerHeader>
          <DrawerBody
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <RenderPages page={page} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                position: "fixed",
                bottom: 0,
                padding: "8px",
                backgroundColor: "white",
              }}
            >
              <div style={{ width: "88%" }}>
                <Stepper index={page} w={"100%"} size={"md"}>
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepIndicator
                        cursor={"pointer"}
                        onClick={() => setPage(index)}
                      >
                        <StepStatus
                          complete={<StepIcon />}
                          incomplete={<StepNumber />}
                          active={<StepNumber />}
                        />
                      </StepIndicator>

                      <Box flexShrink="0" mt={5}>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </Box>

                      <StepSeparator />
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingRight: "40px",
                  paddingLeft: "40px",
                }}
              >
                {page === 0 ? null : (
                  <Button
                    onClick={() => setPage(page - 1)}
                    w={"40%"}
                    colorScheme="blue"
                  >
                    Prev
                  </Button>
                )}
                {page > 4 ? null : (
                  <Button
                    w={page === 0 ? "100%" : "40%"}
                    onClick={() => setPage(page + 1)}
                    disabled={page == 3}
                    ml={4}
                    colorScheme="blue"
                  >
                    Next
                  </Button>
                )}
                {page == 5 ? (
                  <Button
                    colorScheme="whatsapp"
                    rightIcon={<MdDone size={20}/>}
                    ml={5}
                    w={"100%"}
                  >
                    Submit Mission{" "}
                  </Button>
                ) : null}
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddMissionPage;
