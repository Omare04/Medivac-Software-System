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
  Text,
  UnorderedList,
  SkeletonCircle,
  Skeleton,
  Card,
  CardBody,
  Icon,
  Button,
} from "@chakra-ui/react";
import { buttonBlue, dividerColor, dividerColorLight } from "../../Colors";
import { RiPlaneFill } from "react-icons/ri";
import axios from "axios";
import { FaHandHoldingMedical, FaLeaf } from "react-icons/fa";
import { IoMedicalSharp } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import StyledLinkButton from "../../styles/ButtonStyles/TransparentLinks";
import { IoMdSearch } from "react-icons/io";
import {
  CreatePersoneleRolesModal,
  CreatePersoneleEventModal,
  AddUserModal,
} from "../../Components/Modals/PersoneleModals";
import PersoneleCalendar from "./PersoneleCalendar";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoMdAirplane } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineSanitizer } from "react-icons/md";
import { ViewUserInfoModal } from "../../Components/Modals/UserModals";
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
      <div style={{ height: "calc(100% - 50px)", padding: "5px" }}>
        <div
          id="personele-root-wrapper"
          style={{ height: "100%", padding: "5px" }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <Box display={"flex"} flexDirection={"column"} w={"35%"} h={"100%"}>
              <PersoneleAccordion />
            </Box>

            <UserEventComponent />
            <PersoneleCalendar />
          </div>
        </div>
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
      <UnorderedList
        listStyleType={"none"}
        ml={1}
        pl={0}
        overflow={"auto"}
        w={"100%"}
      >
        {personeleLinks.map((item, key) => (
          <ListItem
            key={key}
            pb={3}
            pr={4}
            mt={key === 0 ? 0 : 15}
            cursor={"pointer"}
            whiteSpace="pre-wrap"
            overfloww="hidden"
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

const roles = ["Doctor", "First Officer", "Captain", "Nurse"];
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eva",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
];
const url = [
  "https://bit.ly/dan-abramov",
  "https://bit.ly/kent-c-dodds",
  "https://bit.ly/prosper-baba",
  "https://bit.ly/code-beast",
  "https://bit.ly/sage-adebayo",
];

function getRandomRole() {
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
}

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * roles.length);
  return names[randomIndex];
}

function getRandomURL() {
  const randomIndex = Math.floor(Math.random() * roles.length);
  return url[randomIndex];
}

function PersoneleAccordion() {
  const accordianItems = Array.from({ length: 2 }, (_, index) => ({
    name: getRandomName(),
    role: getRandomRole(),
    url: getRandomURL(),
  }));

  const [filter, setFilter] = useState("");
  const filteredItems = accordianItems.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "+1234567890",
      pfpURL: "https://example.com/profile1.jpg",
      position: "Software Engineer",
      nationality: "American",
      documents: [
        {
          title: "clinical_manager_passport.png",
          type: "image",
          extension: "png",
          dateCreated: new Date(2024, 0, 1),
          size: "33mb",
        },
        {
          title: "clinical_manager_passport.png",
          type: "image",
          extension: "png",
          dateCreated: new Date(2024, 0, 1),
          size: "33mb",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "+9876543210",
      pfpURL: "https://example.com/profile2.jpg",
      position: "Product Manager",
      nationality: "Canadian",
      documentNumber: "123456789",
      documents: [
        {
          title: "clinical_manager_passport.png",
          type: "image",
          extension: "png",
          dateCreated: new Date(2024, 0, 1),
          size: "33mb",
        },
        {
          title: "clinical_manager_passport.png",
          type: "image",
          extension: "png",
          dateCreated: new Date(2024, 0, 1),
          size: "33mb",
        },
      ],
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      phoneNumber: "+1122334455",
      pfpURL: "https://example.com/profile3.jpg",
      position: "Data Analyst",
      nationality: "British",
      documentNumber: "987654321",
      documents: [
        {
          title: "clinical_manager_passport.png",
          type: "image",
          extension: "png",
          dateCreated: new Date(2024, 0, 1),
          size: "33mb",
        },
        {
          title: "clinical_manager_passport.png",
          type: "image",
          extension: "png",
          dateCreated: new Date(2024, 0, 1),
          size: "33mb",
        },
      ],
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      phoneNumber: "+9988776655",
      pfpURL: "https://example.com/profile4.jpg",
      position: "UI/UX Designer",
      nationality: "German",
      documents: [
        {
          title: "clinical_manager_passport.png",
          type: "image",
          extension: "png",
          dateCreated: new Date(2024, 0, 1),
          size: "33mb",
        },
        {
          title: "clinical_manager_passport.png",
          type: "image",
          extension: "png",
          dateCreated: new Date(2024, 0, 1),
          size: "33mb",
        },
      ],
    },
  ];

  return (
    <>
      <div
        id="map-card-item-wrapper"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <InputGroup pr={3} width={"100%"} pb={3} pt={"1.5px"}>
          <InputLeftElement pointerEvents="none" h={"45px"}>
            <IoMdSearch />
          </InputLeftElement>
          <Input
            placeholder="Search"
            borderRadius={5}
            h={"43.7px"}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </InputGroup>
        <div style={{ flex: 1, overflow: "auto", width: "100%" }}>
          <Accordion allowMultiple>
            {users.map((item, index) => (
              <AccordianItemComponent key={index} user={item} />
            ))}
          </Accordion>
        </div>
        <Box display={"flex"} flexDirection={"column"} gap={1} pt={2}></Box>
      </div>
    </>
  );
}

function AccordianItemComponent({ key, user }) {
  const [skeleton, setSkeleton] = useState(false);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkeleton(true);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AccordionItem
        borderBottom={`1px solid ${dividerColorLight}`}
        borderTop={`1px solid ${dividerColorLight}`}
        mr={2}
        isDisabled={!skeleton}
      >
        <AccordionButton
          backgroundColor={"#ffffff"}
          border={"none"}
          pl={4}
          cursor={"pointer"}
          pt={1}
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
              <WrapItem display={"flex"} alignItems={"center"}>
                <SkeletonCircle isLoaded={skeleton}>
                  <Avatar size={"sm"} name={user.name} src={name.pfpURL} />
                </SkeletonCircle>
                <Skeleton width={"100%"} ml={3} isLoaded={skeleton}>
                  <div
                    style={{ paddingLeft: "10px" }}
                    id="personele-name-and-badge-wrapper"
                  >
                    {user.name}
                    <Stack direction={"row"} fontSize={13} color={"red"}>
                      <Badge>{user.position}</Badge>
                    </Stack>
                  </div>
                </Skeleton>
              </WrapItem>
            </Box>
          </Flex>
          {skeleton ? <AccordionIcon color={"grey"} fontSize={19} /> : null}
        </AccordionButton>

        <AccordionPanel pl={5} allowMultiple>
          <Box
            fontSize={12.5}
            pb={1}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid ${dividerColorLight}`}
          >
            email:
            <span> {user.email}</span>
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
            <span>{user.phoneNumber}</span>
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
            <span>{user.nationality}</span>
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
            <span>
              {user.documentNumber == undefined ? "N/A" : user.documentNumber}
            </span>
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
          <Box
            fontSize={12.5}
            marginTop={3}
            pb={1}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Button
              w={"100%"}
              variant={"ghost"}
              colorScheme="blue"
              size={"sm"}
              onClick={() => setModal(true)}
            >
              See more
            </Button>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <ViewUserInfoModal
        isOpen={modal}
        onClose={() => closeModal()}
        user={user}
      />
    </>
  );
}

function UserEventComponent({ icon, eventName, eventDate, eventType }) {
  return (
    <Box
      ml={3}
      w={"39%"}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      h={"100%"}
      overflow={"hidden"}
    >
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        background={"#eaeaea44"}
        p={2}
        mt={"1px"}
        borderRadius={5}
        color={"#2d2d2d"}
      >
        <Text fontSize={19}>Bob's Events</Text>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        h={"calc(100% - 55px)"}
        alignItems={"space-between"}
        justifyContent={"space-between"}
      >
        <Box
          overflow={"auto"}
          h={"100%"}
          pr={1}
          p={1}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
        >
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-123"} />
          <UserEventCardComponent
            eventType={"Inspection"}
            eventName={"Zool Software Inspection"}
          />
          <UserEventCardComponent
            eventType={"Sanitization"}
            eventName={"CNTKC Sanitization"}
          />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
          <UserEventCardComponent eventType={"medivac"} eventName={"AOM-444"} />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1} pt={3}>
          <CreatePersoneleRolesModal />
          <AddUserModal />
        </Box>
      </Box>
    </Box>
  );
}

function UserEventCardComponent({ eventName, eventDate, eventType }) {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <Card
      variant={"outline"}
      borderColor={"whitesmoke"}
      cursor={"pointer"}
      onClick={() => {
        setModal(true);
      }}
    >
      <CardBody p={"7px"} display={"flex"}>
        <Box display={"flex"} justifyContent={"space-between"} w={"100%"}>
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <Icon
              as={
                eventType == "medivac"
                  ? IoMdAirplane
                  : eventType == "Sanitization"
                  ? MdOutlineSanitizer
                  : FaMagnifyingGlass
              }
              color={
                eventType == "medivac"
                  ? buttonBlue
                  : eventType == "Sanitization"
                  ? "red"
                  : "green"
              }
              boxSize={27}
              pl={2}
            />
            <Box display={"flex"} flexDirection={"column"} gap={0} w={"100%"}>
              {" "}
              <Text fontSize={14}> {eventName}</Text>{" "}
              <Text fontSize={12}>{eventType}</Text>
            </Box>
          </Box>
          <Text fontSize={13} fontWeight={"550"}>
            (2023/03/03)
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}

export default Personele;
