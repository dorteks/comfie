import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Topbar = () => {
  return (
    <Box
      pl="100px"
      pr="100px"
      pt="30px"
      width="full"
      height="65vh"
      bgRepeat="inherit"
      bgSize="contain"
      bgImage="/images/nature1.jpg"
    >
      <Stack
        direction="row"
        align="center"
        justify="space-between"
        color="white"
      >
        <Heading fontStyle="oblique">Comfie</Heading>
        <HStack gap="80px">
          <Text fontSize="20px">Destination</Text>
          <Text fontSize="20px">Travel Deals</Text>
          <Text fontSize="20px">About Us</Text>
          <Text fontSize="20px">Blog</Text>
        </HStack>
        <Button fontSize="20px" bgColor="inherit" borderWidth="1px">
          Book a Travel
        </Button>
      </Stack>
      <Stack mt="70px" direction="column" color="white" align="center">
        <Heading size="3xl" textAlign="center" width="60%">
          Discover and enjoy your new places and experiences
        </Heading>
        <Text fontSize="20px">
          Explore destinations, places and unforgettable experiences
        </Text>
      </Stack>

      <Stack mt="50px" align="center">
        <Button width="30%" borderWidth="1px" bgColor="white">
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default Topbar;
