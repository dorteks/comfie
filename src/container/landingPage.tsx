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

const LandingPage = () => {
  return (
    <Box pl="100px" pr="100px" pt="30px">
      <Stack
        height="80px"
        align="center"
        direction="row"
        justify="space-between"
      >
        <Heading fontSize="4xl" fontStyle="oblique">
          Comfie
        </Heading>
        <HStack gap="80px">
          <Text fontSize="20px">Vancouver, BC</Text>
          <Text fontSize="20px">Explore</Text>
          <Text fontSize="20px">Top Cities</Text>
          <Text fontSize="20px">Blog</Text>
          <Text fontSize="20px">Help</Text>
        </HStack>

        <HStack gap={5}>
          <Text fontSize="20px">Sign in</Text>
          <Button
            fontSize="20px"
            bgColor="inherit"
            borderWidth="1px"
            leftIcon={<HiOutlineBriefcase size="25px" />}
          >
            <Text ml="10px"> Add Business</Text>
          </Button>
        </HStack>
      </Stack>

      <Stack direction="row" mt="40px" pt="30px" justify="space-evenly">
        <Stack width="60%">
          <Heading size="2xl">Welcome to</Heading>
          <Heading size="4xl" pt="10px" color="blue.500">
            Vancouver
          </Heading>
          <Text width="95%" pb="50px" fontSize="xl" pt="30px">
            Easily find places to: Stay, Eat, Shop or Visit from our Partners or
            Local businesses.
          </Text>

          <Card
            mt="20px"
            direction="row"
            width="115%"
            align="center"
            justify="center"
            height="100px"
          >
            <Stack direction="row" width="37%" height="60px">
              <Divider orientation="vertical" />
              <Stack pl="20px">
                <HStack>
                  <CiLocationOn />
                  <Text>Location</Text>
                </HStack>
                <Text>Where do you wanna go?</Text>
              </Stack>
            </Stack>
            <Stack direction="row" width="38%" height="60px">
              <Divider orientation="vertical" />
              <Stack pl="20px">
                <HStack>
                  <BsPeople />
                  <Text>People</Text>
                </HStack>
                <Text>How many people?</Text>
              </Stack>
            </Stack>
            <Stack direction="row" width="45%" height="60px">
              <Divider orientation="vertical" />
              <Stack pl="20px">
                <HStack>
                  <BsCalendarDate />
                  <Text>Date</Text>
                </HStack>
                <Text>When do you want to go there?</Text>
              </Stack>
            </Stack>

            <Button
              width="20%"
              borderRadius="15px"
              bgColor="blue.500"
              ml="30px"
              mr="20px"
            >
              Explore Now
            </Button>
          </Card>

          <HStack pt="40px" pb="30px">
            <Text fontSize="20px">Popular Searches: </Text>
            <Text color="gray.600" fontSize="20px">
              Hiking, Starbucks, Fishing, Hotels{" "}
            </Text>
          </HStack>
        </Stack>

        <Stack direction="row" gap={3}>
          <Stack>
            <Card width="250px" height="310px" bgColor="blue">
              <Img src="/images/london.jpeg" />
            </Card>
            <Card width="250px" height="200px" bgColor="red">
              <Img src="/images/london.jpeg" />
            </Card>
          </Stack>
        </Stack>

        <Stack>
          <Card bgColor="green" width="300px" height="500px" mt="100px">
            <Img src="/images/london.jpeg" />
          </Card>
        </Stack>
      </Stack>

      <Stack mt="20px">
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

export default LandingPage;
