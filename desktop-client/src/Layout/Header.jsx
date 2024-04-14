import React from "react";
import {
  StyledHeader,
  StyledNavItem,
  StyledRightSideNavItem,
  StyledHeaderLogo,
  StyledBellIcon,
} from "../styles/HeaderStyles";
import { AiOutlineShop, AiOutlineFileSearch } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { GiPlanePilot } from "react-icons/gi";
import { TbUser } from "react-icons/tb";
import { PiBellSimpleFill } from "react-icons/pi";
import { HeaderNavData } from "./HeaderNavData";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import styled from "styled-components";
import { Avatar, WrapItem } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  Text,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  UnorderedList,
  Badge,
  Box,
  ListItem,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  AvatarBadge,
  Icon,
  Card,
  Portal,
} from "@chakra-ui/react";
import { buttonBlue, dividerColor, dividerColorLight } from "../Colors";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const universalStyle = {
  size: 16,
  style: { paddingRight: "6px", strokeWidth: 1.2 },
};

const StyledHeaderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e40134;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
  height: 100%;
  padding-left: 26px;
  margin-left: 5px;
  padding-right: 26px;
`;

const StyledNavItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #404040;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
  height: 100%;

  text-decoration: none;
  font-weight: 450;
  &:hover {
    background-color: #ececec;
    font-weight: 500;
    transform: scale(1);
  }

  &:active {
    background-color: #ffffffcc;
    transform: scale(0.99); /* Adjust the scaling factor as needed */
  }
`;

const personeleLinks = [
  {
    title: "Account",
    route: "/getMedicalPersonele",
    icon: (
      <MdOutlineManageAccounts
        style={{ fontSize: "18px", marginRight: "5px" }}
      />
    ),
  },
  {
    title: "Settings",
    route: "/getMedicalDoctors",
    icon: (
      <MdOutlineSettings style={{ fontSize: "18px", marginRight: "5px" }} />
    ),
  },
];

function Header() {
  return (
    <>
      <StyledHeader zIndex={1001}>
        <StyledHeaderLogoLink to={"/"}>
          <img src="/aomlogo.png" style={{ height: "45px", width: "47px" }} />
          {/* <GiAirplaneDeparture size={30} /> */}
        </StyledHeaderLogoLink>
        {HeaderNavData.map((value, index) => (
          <StyledNavItemLinks to={value.route} key={index}>
            <div
              style={{
                height: "50%",
                paddingRight: "26px",
                paddingLeft: "26px",
                borderRight: `1px solid #dddddd`,
                borderLeft: index === 0 ? `1px solid #dddddd` : null,
              }}
            >
              {value.title}
            </div>
          </StyledNavItemLinks>
        ))}
        <StyledRightSideNavItem>
          <Popover zIndex={1001}>
            <Box display={"flex"} alignItems={"center"} mr={15} gap={0}>
              <Text color={"green"} borderRadius={100} p={2} pb={1} pt={1}>
                +4
              </Text>
              <PopoverTrigger>
                <Icon boxSize={7} mt={2} display={"flex"} alignItems={"center"}>
                  <StyledBellIcon />
                </Icon>
              </PopoverTrigger>
            </Box>
            <Portal zIndex={1001}>
              <PopoverContent minHeight={20} w={400} zIndex={1001}>
                <PopoverHeader>Notifications</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Box display={"flex"} flexDirection={"column"} gap={2} >
                    <RequestsNoticationCard
                      imageURL="./tarik_elmasaoudi.png"
                      name={"Tarik Elmasaoudi"}
                      type={"order"}
                      date={"A Day Ago"}
                    />
                    <RequestsNoticationCard
                      imageURL="https://bit.ly/kent-c-dodds"
                      name={"Billy Bob"}
                      type={"Pharmaceutical Request"}
                      date={"2 Days Ago"}
                    />
                    <RequestsNoticationCard
                      imageURL="https://bit.ly/code-beast"
                      name={"Bouzza El masaoudi"}
                      type={"order"}
                      date={"Last Week"}
                    />
                    <RequestsNoticationCard
                      imageURL="https://bit.ly/kent-c-dodds"
                      name={"Omar Elmasaoudi"}
                      type={"Equipment"}
                      date={"Last Week"}
                    />
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <WrapItem pr={6} pl={3} cursor={"pointer"}>
                <Avatar
                  name="Dan Abrahmov"
                  src="/tarik_elmasaoudi.png"
                  size={"sm"}
                >
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
              </WrapItem>
            </PopoverTrigger>
            <Portal>
              <PopoverContent width={250}>
                <PopoverArrow />
                <PopoverHeader mt={1} mb={1}>
                  Hello Tarik
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <UnorderedList
                    listStyleType={"none"}
                    ml={0}
                    pl={0}
                    mb={1}
                    mt={1}
                    overflow={"auto"}
                  >
                    {personeleLinks.map((item, key) => (
                      <ListItem
                        key={key}
                        mt={1}
                        pb={1}
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
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                        borderBottom={`1px solid ${dividerColorLight}`}
                      >
                        {item.icon}
                        {item.title}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </PopoverBody>
                <PopoverFooter>
                  <Button colorScheme="red" width={"100%"}>
                    Log Out
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </StyledRightSideNavItem>
      </StyledHeader>
    </>
  );
}

function RequestsNoticationCard({ type, name, imageURL, date }) {
  return (
    <>
      <Card
        variant={"unstyled"}
        background={dividerColorLight}
        p={2}
        cursor={"pointer"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"flex-start"}>
            <Avatar name={name} src={imageURL} size={"sm"}>
              {" "}
              <AvatarBadge
                boxSize="1.25em"
                bg={type == "order" ? "green.500" : "red.500"}
              />
            </Avatar>
            <Box pl={2} display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} gap={2}>
                <Text fontSize={14}>{name}</Text>
                <Badge
                  display={"flex"}
                  alignItems={"center"}
                  color="grey"
                  size={"xs"}
                >
                  {date}
                </Badge>
              </Box>
              {type == "order" ? (
                <Text fontSize={12}>Created An Order</Text>
              ) : (
                <Text fontSize={12}>Created A {type}</Text>
              )}
            </Box>
          </Box>
          <IoEllipsisVerticalSharp />
        </Box>
      </Card>
    </>
  );
}

export default Header;
