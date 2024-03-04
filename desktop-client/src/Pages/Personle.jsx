import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  WrapItem,
  Badge,
  Avatar,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { dividerColor, dividerColorLight } from "../Colors";
import { RiPlaneFill } from "react-icons/ri";
import axios from "axios";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IoMedicalSharp } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";

export const StockServiceApi = axios.create({
  baseURL: "/stock-management-service", // Set your API base URL here
  timeout: 5000, // Set a timeout if needed
});

function Personle() {

  const [state, setState] = useState([{}]);

  async function fetchValues() {
    const values = await StockServiceApi.get("/hi");
    console.log(values);
    // setState([values.data])
  }

  useEffect(() => {
    fetchValues()
  }, [])

  return (
    <>
      <p
        style={{
          fontWeight: "300",
          borderBottom: `1px solid #ededed`,
          paddingBottom: "10px",
          width: "90%",
          marginLeft: "50px",
          color: "#7b7b7b",
          fontSize: "20px",
        }}
      >
        Personele
      </p>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "80%",
          marginRight: "10px",
        }}
      >
        <PersoneleListComponent />
        <PersoneleAccordion />
      </div>
    </>
  );
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
    title: "Nurses",
    route: "/getMedicalNurses",
    icon: <IoMedicalSharp />,
  },
];

function PersoneleListComponent() {
  const [route, setRoute] = useState("");

  // useEffect(() => {
  //   StockServiceApi.get(`${route}`).then(result => {

  //   }).catch(e => {

  //   })
  // },[route])

  return (
    <>
    <UnorderedList listStyleType={"none"} mr={60}>
      {personeleLinks.map((item, key) => (
        <ListItem
          key={key}
          pb={7}
          width={"100%"}
          mt={key === 0 ? 0 : 15}
          cursor={"pointer"}
          fontWeight={350}
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

function PersoneleAccordion() {
  return (
    <>
      <div
        id="map-card-item-wrapper"
        style={{
          width: "30%",
          marginLeft: "20px",
          overflow: "auto",
          borderLeft: `1px solid #ededed`,

        }}
      >
        <Accordion allowToggle pr={15} ml={35}>
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
    </>
  );
}

function AccordianItemComponent() {



  useEffect(() => {

  }, [])

  return (
    <>
      <AccordionItem pb={2} pt= {2} borderBottom={`1px solid ${dividerColorLight}`} borderTop={`1px solid ${dividerColorLight}`}>
        <h2 style={{ margin: "0px" }}>
          <AccordionButton
            backgroundColor={"#ffffff"}
            border={"none"}
            pl={8}
            cursor={"pointer"}
            pt={10}
            pb={10}
          >
            <Flex
              as="span"
              flex="1"
              textAlign="left"
              flexDirection={"column"}
              color={dividerColorLight}
              fontSize={15}
              fontWeight={300}
            >
              <Box color={"black"}>
                Dr.Joe Biden
                <Stack direction={"row"} fontSize={13} color={"red"}>
                  <Badge colorScheme="red"> Doctor</Badge>
                </Stack>
              </Box>
            </Flex>
            <AccordionIcon color={"grey"} fontSize={19} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} mb={7} pl={10}>
          <Box
            fontSize={12.5}
            marginTop={5}
            pb={7}
            pt={5}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            email
            <span> something@gmail.com</span>
          </Box>
          <Box
            fontSize={12.5}
            marginTop={5}
            pb={7}
            pt={5}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            Phone Number
            <span>203-111-9201</span>
          </Box>
          <Box
            fontSize={12.5}
            marginTop={5}
            pb={7}
            pt={5}
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
            marginTop={5}
            pb={7}
            pt={5}
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
            marginTop={5}
            pb={7}
            pt={5}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            Position:
            <span>MD</span>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

class Personele {
  constructor(email, phone, nationality, document, position) {
    this.email = email || ''; 
    this.phone = phone || 0;   
    this.nationality = nationality || '';
    this.document = document || null; 
    this.position = position || '';
  }
}


function AccordianItemDetails(){

  const[userDetails, setUserDetails] = useState({})

  
  useEffect(() => {

  }, [userDetails])
  return (
    <>

    </>
  )
}
export default Personle;
