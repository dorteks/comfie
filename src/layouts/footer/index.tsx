import {
  Box,
  Divider,
  Heading,
  HStack,
  Img,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      pl="100px"
      pr="100px"
      pt="60px"
      flexDirection="column"
      bgColor="black"
      color="white"
    >
      <Stack direction="row">
        <Stack width="35%" gap={8}>
          <Heading fontStyle="oblique" size="2xl">
            Comfie
          </Heading>
          <Text width="80%" fontSize="20px">
            The perfect variety of experiences to satisfy anyone looking for an
            adventure
          </Text>
          <HStack gap={8}>
            <Img boxSize="50px" src="/images/instagram.png" />
            <Img boxSize="50px" borderRadius="5px" src="/images/facebook.png" />
            <Img boxSize="50px" borderRadius="5px" src="/images/linkedin.png" />
            <Img boxSize="50px" borderRadius="5px" src="/images/twitter.png" />
          </HStack>
        </Stack>
        <Stack width="20%" gap={5}>
          <Text fontSize="22px">Destinations</Text>
          <Text fontSize="22px">About Us</Text>
          <Text fontSize="22px">Our Guides</Text>
          <Text fontSize="22px">Blog</Text>
          <Text fontSize="22px">Contact Us</Text>
        </Stack>
        <Stack width="20%" gap={5}>
          <Text fontSize="22px">Terms and Conditions</Text>
          <Text fontSize="22px">Terms of Use</Text>
          <Text fontSize="22px">Health and Safety</Text>
          <Text fontSize="22px">Cancellation Policy</Text>
          <Text fontSize="22px">Privacy Policy</Text>
        </Stack>
        <Box width="20%" gap={4}>
          <Text fontSize="22px">Language</Text>
          <Select mt="10px" width="full">
            <option> English (United States) </option>
            <option> English (United States) </option>
            <option> English (United States) </option>
            <option> English (United States) </option>
          </Select>
          <Text fontSize="22px" mt="25px">
            Currency
          </Text>
          <Select mt="10px" width="full" colorScheme="inherit">
            <option>U.S. Dollar (US$)</option>
            <option>U.S. Dollar (US$)</option>
            <option>U.S. Dollar (US$)</option>
            <option>U.S. Dollar (US$)</option>
          </Select>
        </Box>
      </Stack>

      <Divider mt="70px" />

      <Box pt="50px" pb="70px" textAlign="center">
        <Text fontSize="20px"> Copyright 2022</Text>
      </Box>
    </Box>
  );
};

export default Footer;
