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
import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdOutlineKingBed } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbBuildingStore } from "react-icons/tb";
import { HiOutlineTicket } from "react-icons/hi";

import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate, BsPeople } from "react-icons/bs";

const DesktopLandingPage = () => {
  return (
    <Box
      pr={["0px", "0px", "0px", "20px", "90px"]}
      pl={["0px", "0px", "0px", "20px", "90px"]}
      pt="30px"
    >
      {/* top component */}
      <Stack
        height="80px"
        align="center"
        direction="row"
        justify="space-between"
        display={["none", "none", "none", "flex", "flex"]}
      >
        <Heading
          fontSize={["0px", "0px", "0px", "3xl", "4xl"]}
          fontStyle="oblique"
        >
          Comfie
        </Heading>
        <HStack gap={["0px", "0px", "0px", "20px", "50px"]}>
          <HStack>
            <CiLocationOn size="23px" color="blue" />
            <Text fontSize="20px" pl="5px">
              Vancouver, BC
            </Text>
          </HStack>
          <Text fontSize="20px">Explore</Text>
          <Text fontSize="20px">Top Cities</Text>
          <Text fontSize="20px">Blog</Text>
          <Text fontSize="20px">Help</Text>
        </HStack>

        <HStack gap={[0, 0, 0, 2, 5]}>
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
            <Text ml="10px">Add Business</Text>
          </Button>
        </HStack>
      </Stack>

      {/* middle component */}

      <Stack
        direction="row"
        mt="40px"
        pt="30px"
        justify={["none", "none", "none", "space-between", "space-evenly"]}
        display={["none", "none", "none", "flex", "flex"]}
      >
        <Stack width={["0", "0", "0", "45%", "60%"]}>
          <Heading size={["0", "0", "0", "xl", "2xl"]}>Welcome to</Heading>
          <Heading
            size={["0", "0", "0", "2xl", "4xl"]}
            pt="10px"
            color="blue.500"
          >
            Vancouver
          </Heading>
          <Text width={["0", "0", "0", "100%", "95%"]} fontSize="xl" pt="30px">
            Easily find places to: Stay, Eat, Shop or Visit from our Partners or
            Local businesses.
          </Text>

          <Box pt="65px">
            <Card
              direction="row"
              width={["0", "0", "0", "155%", "115%"]}
              align="center"
              justify="center"
              height={["0", "0", "0", "120px", "100px"]}
              borderRadius="15px"
            >
              <Stack direction="row" width="37%" height="60px">
                <Divider orientation="vertical" />
                <Stack pl="20px">
                  <HStack>
                    <CiLocationOn color="blue" size="18px" />
                    <Text pl="5px">Location</Text>
                  </HStack>
                  <Text>Where do you wanna go?</Text>
                </Stack>
              </Stack>
              <Stack direction="row" width="38%" height="60px">
                <Divider orientation="vertical" />
                <Stack pl="20px">
                  <HStack>
                    <BsPeople color="blue" size="18px" />
                    <Text pl="5px">People</Text>
                  </HStack>
                  <Text>How many people?</Text>
                </Stack>
              </Stack>
              <Stack direction="row" width="45%" height="60px">
                <Divider orientation="vertical" />
                <Stack pl="20px">
                  <HStack>
                    <BsCalendarDate color="blue" size="18px" />
                    <Text pl="5px">Date</Text>
                  </HStack>
                  <Text>When do you want to go there?</Text>
                </Stack>
              </Stack>

              <Button
                width={["0", "0", "0", "30%", "25%"]}
                borderRadius="15px"
                bgColor="blue.500"
                ml={["0px", "0px", "0px", "20px", "50px"]}
                mr="20px"
              >
                Explore Now
              </Button>
            </Card>
          </Box>

          <Stack
            direction={["column", "column", "column", "column", "row"]}
            pt="40px"
            pb="30px"
          >
            <Text fontSize="20px">Popular Searches: </Text>
            <Text color="gray.600" fontSize="20px">
              Hiking, Starbucks, Fishing, Hotels{" "}
            </Text>
          </Stack>
        </Stack>

        <HStack>
          <Stack direction="row" gap={3}>
            <Stack>
              <Box
                width={["0px", "0px", "0px", "220px", "250px"]}
                height={["0px", "0px", "0px", "290px", "320px"]}
              >
                <Img src="/images/tour3.jpg" />
              </Box>
              <Box
                width={["0px", "0px", "0px", "220px", "250px"]}
                height="200px"
              >
                <Img src="/images/vancouver2.jpg" />
              </Box>
            </Stack>
          </Stack>

          <Stack>
            <Card
              bgColor="blue.500"
              width={["0px", "0px", "0px", "250px", "300px"]}
              height="500px"
              mt="100px"
            >
              <Img src="/images/vancouver3.jpg" />
            </Card>
          </Stack>
        </HStack>
      </Stack>

      {/* buttom component */}
      <Stack
        mt="20px"
        mb="100px"
        display={["none", "none", "none", "flex", "flex"]}
      >
        <Heading fontSize="3xl">Choose by Category:</Heading>
        <Stack direction="row" pt="50px" gap={5}>
          <Card
            width="20%"
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
            width="20%"
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
            width="20%"
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
            width="20%"
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
            width="20%"
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

export default DesktopLandingPage;
