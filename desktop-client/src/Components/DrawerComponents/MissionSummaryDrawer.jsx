import React, { useState } from "react";

function MissionSummaryDrawer() {
  const [drawer, setDrawer] = useState(false);

  const openMissionDrawer = (missionId) => {
    setMissionId(missionId);
    setDrawer(true);
    setActiveTab(0);
  };

  const closeMissionDrawer = () => {
    setDrawer(false);
  };
  
  return (
    <>
      <Drawer
        isOpen={drawer}
        placement="right"
        onClose={closeMissionDrawer}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{missionId}</DrawerHeader>

          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            p={0}
          >
            <Box p={5}>
              <RenderDrawerBody page={activeTab} />
            </Box>
          </DrawerBody>

          <DrawerFooter p={0}>
            <Tabs isLazy pl={5} pr={5} w={"100%"} pb={2}>
              <TabList
                justifyContent={"center"}
                display={"flex"}
                gap={20}
                w={"100%"}
              >
                <Tab
                  onClick={() => handleTabClick(0)}
                  isSelected={activeTab === 0}
                >
                  Flight
                </Tab>
                <Tab
                  onClick={() => handleTabClick(1)}
                  isSelected={activeTab === 1}
                >
                  Crew
                </Tab>
                <Tab
                  onClick={() => handleTabClick(2)}
                  isSelected={activeTab === 2}
                >
                  Drugs & Equipment
                </Tab>
                <Tab
                  onClick={() => handleTabClick(3)}
                  isSelected={activeTab === 3}
                >
                  Patient
                </Tab>
                <Tab
                  onClick={() => handleTabClick(4)}
                  isSelected={activeTab === 4}
                >
                  General
                </Tab>
              </TabList>
            </Tabs>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MissionSummaryDrawer;
