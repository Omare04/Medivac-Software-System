import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  WrapItem,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  Avatar,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { dividerColor, dividerColorLight } from "../../Colors";
import { RiPlaneFill } from "react-icons/ri";
import axios from "axios";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IoMedicalSharp } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import StyledLinkButton from "../../styles/ButtonStyles/TransparentLinks";
import { IoMdSearch } from "react-icons/io";
import { CreatePersoneleRolesModal } from "../../Components/Modals/PersoneleModals";
import PersoneleTasks from "./PersoneleTasks";

export const StockServiceApi = axios.create({
  baseURL: "/stock-management-service", // Set your API base URL here
  timeout: 5000, // Set a timeout if needed
});

class PersoneleStruct {
  constructor(email, phone, nationality, document, position) {
    this.email = email || "";
    this.phone = phone || 0;
    this.nationality = nationality || "";
    this.document = document || null;
    this.position = position || "";
  }
}

const personeleLinks = [
  {
    title: "Medical Personele",
    route: "/getMedicalPersonele",
    icon: <FaHandHoldingMedical />,
  },
  {
    title: "Doctors",
    route: "/getMedicalDoctors",
    icon: <MdMedicalServices />,
  },
  {
    title: "Directors",
    route: "/getMedicalNurses",
    icon: <IoMedicalSharp />,
  },
  {
    title: "Admins",
    route: "/getMedicalNurses",
    icon: <IoMedicalSharp />,
  },
  {
    title: "Ops",
    route: "/getMedicalNurses",
    icon: <IoMedicalSharp />,
  },
];

////////////////////////////////// MAIN //////////////////////////////////
function Personele() {
  const [state, setState] = useState([{}]);

  async function fetchValues() {
    const values = await StockServiceApi.get("/hi");
    console.log(values);
    // setState([values.data])
  }

  useEffect(() => {
    fetchValues();
  }, []);

  return (
    <>
      <p
        style={{
          fontWeight: "350",
          borderBottom: `1px solid #ededed`,
          paddingBottom: "10px",
          marginTop: "18px",
          width: "90%",
          marginLeft: "50px",
          color: "#5f5f5f",
          fontSize: "22px",
        }}
      >
        Personele
      </p>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          width: "100%",
          height: "80%",
          marginLeft: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <PersoneleListComponent />
          <CreatePersoneleRolesModal />
        </div>
        <PersoneleAccordion />
        <PersoneleTasks />
      </div>
    </>
  );
}

////////////////////////////////// Personele Link components //////////////////////////////////
function PersoneleListComponent() {
  const [route, setRoute] = useState("");

  // useEffect(() => {
  //   StockServiceApi.get(`${route}`).then(result => {

  //   }).catch(e => {

  //   })
  // },[route])

  return (
    <>
      <UnorderedList listStyleType={"none"} ml={0} pl={0} overflow={"auto"}>
        {personeleLinks.map((item, key) => (
          <ListItem
            key={key}
            pb={3}
            mr={20}
            mt={key === 0 ? 0 : 15}
            cursor={"pointer"}
            whiteSpace="pre-wrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontWeight={400}
            fontSize={15}
            transition="all 0.1s"
            _hover={{
              color: "#6d6d6d",
            }}
            _active={{
              color: "#7e7e7e",
            }}
            onClick={() => {
              setRoute(item.route);
            }}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            {item.title}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

////////////////////////////////// ACCORDION ITEMS //////////////////////////////////
function PersoneleAccordion() {
  return (
    <>
      <div
        id="map-card-item-wrapper"
        style={{
          width: "30%",
          marginLeft: "20px",
          borderLeft: `1px solid #ededed`,
          paddingLeft: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <InputGroup pr={3} pb={2} width={"100%"}>
          <InputLeftElement pointerEvents="none" height={"33px"}>
            <IoMdSearch />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search"
            borderRadius={2}
            height={"33px"}
          />
        </InputGroup>
        <div style={{ flex: 1, overflow: "auto", width: "100%" }}>
          <Accordion allowToggle>
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
            <AccordianItemComponent />
          </Accordion>
        </div>
      </div>
    </>
  );
}

function AccordianItemComponent() {
  // useEffect(() => {

  // }, [])

  return (
    <>
      <AccordionItem
        borderBottom={`1px solid ${dividerColorLight}`}
        borderTop={`1px solid ${dividerColorLight}`}
        mr={2}
      >
        <AccordionButton
          backgroundColor={"#ffffff"}
          border={"none"}
          pl={4}
          cursor={"pointer"}
          pt={1}
          pb={1.1}
        >
          <Flex
            as="span"
            flex="1"
            textAlign="left"
            flexDirection={"column"}
            color={dividerColorLight}
            fontSize={14.5}
            fontWeight={350}
          >
            <Box color={"black"}>
              <WrapItem pb={2} display={"flex"} alignItems={"center"}>
                <Avatar
                  size={"sm"}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
                <div
                  style={{ paddingLeft: "10px" }}
                  id="personele-name-and-badge-wrapper"
                >
                  Dr.Bouazza laed
                  <Stack direction={"row"} fontSize={13} color={"red"}>
                    <Badge colorScheme="blue"> Doctor</Badge>
                  </Stack>
                </div>
              </WrapItem>
            </Box>
          </Flex>
          <AccordionIcon color={"grey"} fontSize={19} />
        </AccordionButton>

        <AccordionPanel pl={5} pb={1}>
          <Box
            fontSize={12.5}
            pb={1}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            email:
            <span> something@gmail.com</span>
          </Box>
          <Box
            fontSize={12.5}
            marginTop={3}
            pb={1}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            Phone Number:
            <span>203-111-9201</span>
          </Box>
          <Box
            fontSize={12.5}
            marginTop={3}
            pb={1}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            Nationality:
            <span>Morrocan </span>
          </Box>
          <Box
            fontSize={12.5}
            marginTop={3}
            pb={1}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            Document number:
            <span>12312331</span>
          </Box>
          <Box
            fontSize={12.5}
            marginTop={3}
            pb={1}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            Position:
            <span>MD</span>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default Personele;
