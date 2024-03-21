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
import { buttonBlue } from "../../Colors";

function RenderPages({ page }) {
  switch (page) {
    case 0:
      return <FlightInfoPage />;
    case 1:
      return <CrewInfoPage />;
    case 2:
      return <PatientInfoPage />;
    default:
      return null; // Handle invalid page case
  }
}

function AddMissionPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(0);

  const steps = [
    { title: "First", description: "Flight Info" },
    { title: "Second", description: "Crew Info" },
    { title: "Third", description: "Drugs & Equipment" },
    { title: "Fourth", description: "Patient Info" },
    { title: "Fifth", description: "Summary" },
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
            background={buttonBlue}
            color={"white"}
          >
            Create Mission
          </DrawerHeader>
          <DrawerBody
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>
              {" "}
              <RenderPages page={page} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between", // Aligning stepper in the middle and buttons at the end
                alignItems: "center", // Centering the content vertically
                gap: "10px",
                width: "100%",
              }}
            >
              <div style={{ width: "80%" }}>
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

                      <Box flexShrink="0">
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </Box>

                      <StepSeparator />
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div style={{}}>
                {page === 0 ? null : (
                  <Button onClick={() => setPage(page - 1)}>Prev</Button>
                )}
                <Button
                  onClick={() => setPage(page + 1)}
                  disabled={page == 3}
                  ml={5}
                >
                  Next
                </Button>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddMissionPage;
