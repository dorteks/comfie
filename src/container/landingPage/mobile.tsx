import {
  Box,
  Button,
  Card,
  Divider,
  Heading,
  HStack,
  Img,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdClose, MdOutlineKingBed } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbBuildingStore } from "react-icons/tb";
import { HiOutlineTicket } from "react-icons/hi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate, BsPeople } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const MobileLandingPage = () => {
  const [display, setDisplay] = useState("none");
  const [open, setOpen] = useState("none");

  return (
    <Box
      pr={["10px", "20px", "30px", "0px", "0px"]}
      pl={["10px", "20px", "30px", "0px", "0px"]}
      mt="30px"
    >
      <Stack
        height="80px"
        align="center"
        direction="row"
        justify="space-between"
        bgColor={["purple", "green", "white", "yellow", "blue"]}
        display={["flex", "flex", "flex", "none", "none"]}
      >
        {/* menu  1 */}
        <Box>
          <Button w="30px" onClick={() => setDisplay("flex")}>
            <HamburgerIcon />
          </Button>

          <Box
            top="0"
            left="0"
            height="100vh"
            position="fixed"
            zIndex={20}
            overflowY="auto"
            display={display}
          >
            <Stack
              direction="column"
              pl={["10px", "20px", "30px", "0px", "0px"]}
              mt="50px"
            >
              <Button w="30px" onClick={() => setDisplay("none")}>
                <HamburgerIcon />
              </Button>
              <Text fontSize="20px">Explore</Text>
              <Text fontSize="20px">Top Cities</Text>
              <Text fontSize="20px">Blog</Text>
              <Text fontSize="20px">Help</Text>
            </Stack>
          </Box>
        </Box>
        <Heading fontSize="4xl" fontStyle="oblique">
          Comfie
        </Heading>
        <HStack gap="80px">
          <HStack>
            <CiLocationOn size="23px" color="blue" />
            <Text
              fontSize="20px"
              pl="5px"
              display={["none", "flex", "flex", "none", "none"]}
            >
              Vancouver, BC
            </Text>
          </HStack>
        </HStack>

        {/* menu 2 */}
        <Box>
          <Button w="30px" onClick={() => setOpen("flex")}>
            <BiUser bbox="40px" />
          </Button>

          <Box
            top="0"
            right="0"
            height="100vh"
            position="fixed"
            zIndex={20}
            overflowY="auto"
            display={open}
          >
            <Stack direction="column" mt="60px">
              <Button
                alignSelf="end"
                mr="20px"
                w="30px"
                onClick={() => setOpen("none")}
              >
                <BiUser width="30px" height="30px" />
              </Button>
              <Text fontSize="20px" color="blue.500">
                Sign in
              </Text>
              <Button
                fontSize="20px"
                bgColor="inherit"
                borderWidth="1px"
                height="50px"
                backgroundColor="blue.500"
                leftIcon={<HiOutlineBriefcase size="25px" />}
              >
                <Text ml="10px"> Add Business</Text>
              </Button>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Stack
        direction="column"
        mt={["20px", "30px", "30px", "0px", "0px"]}
        pt="10px"
        justify="space-evenly"
        display={["flex", "flex", "flex", "none", "none"]}
      >
        <Stack width="100%">
          <HStack justify="center">
            <Heading size={["lg", "xl", "2xl", "0", "0"]}>Welcome to</Heading>
            <Heading
              size={["xl", "3xl", "4xl", "0", "0"]}
              color="blue.500"
              pl="5px"
            >
              Vancouver
            </Heading>
          </HStack>
          <Text
            width={["100%", "97%", "95%", "0", "0"]}
            pb="50px"
            textAlign="center"
            fontSize="xl"
            pt="30px"
          >
            Easily find places to: Stay, Eat, Shop or Visit from our Partners or
            Local businesses.
          </Text>

          <HStack>
            <Card
              width={["90%", "60%", "40%", "0", "0"]}
              height="auto"
              align="center"
              justify={["center", "center", "none", "none", "none"]}
              alignSelf="flex-start"
              borderRadius="15px"
            >
              <Stack align="center" pt="30px">
                <HStack>
                  <CiLocationOn color="blue" size="18px" />
                  <Text pl="5px">Location</Text>
                </HStack>
                <Text>Where do you wanna go?</Text>
                <Divider pt="20px" />
              </Stack>

              <Stack align="center" pt="30px">
                <HStack>
                  <BsPeople color="blue" size="18px" />
                  <Text pl="5px">People</Text>
                </HStack>
                <Text>How many people?</Text>
                <Divider pt="20px" />
              </Stack>

              <Stack align="center" pt="30px">
                <HStack>
                  <BsCalendarDate color="blue" size="18px" />
                  <Text pl="5px">Date</Text>
                </HStack>
                <Text>When do you want to go there?</Text>
                <Divider pt="20px" />
              </Stack>

              <Stack mt="30px" align="center" mb="30px">
                <Button
                  width="70%"
                  borderRadius="15px"
                  bgColor="blue.500"
                  ml="30px"
                  mr="20px"
                >
                  Explore Now
                </Button>
              </Stack>
            </Card>
            <HStack
              pl="20px"
              display={["none", "none", "flex", "none", "none"]}
            >
              <Stack direction="row">
                <Stack pt="60px">
                  <Box width="200px" height="260px">
                    <Img src="/images/tour3.jpg" />
                  </Box>
                  <Box width="200px" height="200px">
                    <Img src="/images/vancouver2.jpg" />
                  </Box>
                </Stack>
              </Stack>

              <Stack>
                <Card
                  bgColor="blue.500"
                  width="250px"
                  height="450px"
                  mt="120px"
                >
                  <Img src="/images/vancouver3.jpg" />
                </Card>
              </Stack>
            </HStack>
          </HStack>
        </Stack>

        <Stack
          direction={["column", "row", "row", "row", "row"]}
          pt="40px"
          pb="30px"
        >
          <Text fontSize={["17px", "17px", "20px", "0px", "0px"]}>
            Popular Searches:
          </Text>
          <Text
            color="gray.600"
            fontSize={["17px", "17px", "20px", "0px", "0px"]}
          >
            Hiking, Starbucks, Fishing, Hotels{" "}
          </Text>
        </Stack>

        <HStack display={["flex", "flex", "none", "none", "none"]}>
          <Stack direction="row">
            <Stack>
              <Box width="250px" height="320px">
                <Img src="/images/tour3.jpg" />
              </Box>
              <Box width="250px" height="200px">
                <Img src="/images/vancouver2.jpg" />
              </Box>
            </Stack>
          </Stack>

          <Stack>
            <Card bgColor="blue.500" width="300px" height="500px" mt="100px">
              <Img src="/images/vancouver3.jpg" />
            </Card>
          </Stack>
        </HStack>
      </Stack>

      <Stack
        mt="20px"
        mb="100px"
        display={["flex", "flex", "flex", "none", "none"]}
      >
        <Heading fontSize="3xl">Choose by Category:</Heading>
        <Stack
          direction={["column", "column", "row", "row", "row"]}
          pt="50px"
          align="center"
          gap={5}
        >
          <Card
            width="70%"
            align="center"
            height="150px"
            justify="center"
            gap="4"
            border="1px"
            borderColor="gray.200"
          >
            <Box
              bgColor="purple.50"
              boxSize="50px"
              p="10px"
              borderRadius="30px"
            >
              <MdOutlineKingBed size="30px" color="purple" />
            </Box>
            <Text fontSize="xl">Accomodation</Text>
          </Card>
          <Card
            width="70%"
            align="center"
            height="150px"
            justify="center"
            gap="4"
            border="1px"
            borderColor="gray.200"
          >
            <Box
              bgColor="yellow.50"
              boxSize="50px"
              p="10px"
              borderRadius="30px"
            >
              <ImSpoonKnife size="30px" color="yellow" />
            </Box>
            <Text fontSize="xl">Food and Drink</Text>
          </Card>
          <Card
            width="70%"
            align="center"
            height="150px"
            justify="center"
            gap="4"
            border="1px"
            borderColor="gray.200"
          >
            <Box bgColor="pink.50" boxSize="50px" p="10px" borderRadius="30px">
              <HiOutlineShoppingBag size="30px" color="pink" />
            </Box>
            <Text fontSize="xl">Shopping</Text>
          </Card>
          <Card
            width="70%"
            align="center"
            height="150px"
            justify="center"
            gap="4"
            border="1px"
            borderColor="gray.200"
          >
            <Box bgColor="green.50" boxSize="50px" p="10px" borderRadius="30px">
              <TbBuildingStore size="30px" color="green" />
            </Box>
            <Text fontSize="xl">Art and History</Text>
          </Card>
          <Card
            width="70%"
            align="center"
            height="150px"
            justify="center"
            gap="4"
            border="1px"
            borderColor="gray.200"
          >
            <Box bgColor="blue.50" boxSize="50px" p="10px" borderRadius="30px">
              <HiOutlineTicket size="30px" color="blue" />
            </Box>
            <Text fontSize="xl">Entertainment</Text>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileLandingPage;
