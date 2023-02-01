import Layout from "@/layouts";
import {
  Box,
  Button,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Divider, HStack } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import { BsClock, BsStar } from "react-icons/bs";

const HomeContainer = () => {
  return (
    <Box height="auto" pl="100px" pr="100px" pt="100px">
      <Box>
        <Stack direction="row" justify="space-between">
          <Heading width="45%" lineHeight="90px" size="4xl" gap={2}>
            Where Do You Want To Explore?
          </Heading>
          <Stack direction="column" width="40%" gap={3}>
            <Heading size="lg">
              Explore points of interest in various places around the world
            </Heading>
            <Button
              width="50%"
              height="60px"
              bgColor="blue.300"
              borderRadius="30px"
              fontSize="20px"
            >
              View all destinations
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" mt="100px" gap={10}>
          <VStack>
            <Box boxSize="450px" bgImage="/images/paris.jpeg"></Box>
            <Text pt="50px" fontWeight="bold" fontSize="32px">
              Paris
            </Text>
            <Text
              fontSize="28px"
              width="75%"
              color="gray.600"
              textAlign="center"
            >
              Book small group Paris tours, Paris food tours and more.
            </Text>
          </VStack>
          <VStack>
            <Box boxSize="450px" bgImage="/images/london.jpeg"></Box>
            <Text pt="50px" fontWeight="bold" fontSize="32px">
              London
            </Text>
            <Text
              fontSize="28px"
              width="75%"
              color="gray.600"
              textAlign="center"
            >
              Our small-group London tours offer some ofthe citys top sights.
            </Text>
          </VStack>
          <VStack>
            <Box boxSize="450px" bgImage="/images/rome.jpeg"></Box>
            <Text pt="50px" fontWeight="bold" fontSize="32px">
              Rome
            </Text>
            <Text
              fontSize="28px"
              width="75%"
              color="gray.600"
              textAlign="center"
            >
              This special access Rome tour, early entry to the Vatican and
              Colosseum.
            </Text>
          </VStack>
        </Stack>
      </Box>

      <Box
        pl="100px"
        pr="100px"
        mt="50px"
        pt="70px"
        pb="70px"
        bgImage="/images/bgmotif.jpeg"
      >
        <Heading size="xl" lineHeight="60px">
          We think everyone deserves to experience the joy of travel. Whatever
          your background or needs tand no matter where you want to go: we are
          here to empower your journey
        </Heading>
      </Box>

      <Stack mt="100px" mb="100px">
        <Stack direction="row">
          <Heading width="50%" size="2xl">
            Most popular tours{" "}
          </Heading>
          <Heading size="lg" width="50%">
            Make unforgettable memories with exclusive tours, VIP access, small
            groups and perfectly.
          </Heading>
        </Stack>

        <Divider pt="50px" />
      </Stack>
      <Stack direction="row" justify="space-between">
        <Box width="33%">
          <Heading size="xl" lineHeight="50px">
            Munich Classic City Segway Tour
          </Heading>
          <HStack mt="40px">
            <Text fontSize="xl">From </Text>
            <Text fontSize="2xl" color="blue.400">
              $75
            </Text>
          </HStack>
        </Box>
        <Box width="33%">
          <Text fontSize="xl" width="85%" color="gray.600">
            Our MunichClassic City Segway Tour is the perfect tour for both
            those new to the city and Munich veterans.
          </Text>
          <HStack mt="30px">
            <HStack mr="30px" gap={1}>
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
            </HStack>
            <Text fontSize="xl">97 reviews</Text>
          </HStack>
          <HStack mt="30px">
            <BsClock size="20px" />
            <Text pl="30px" fontSize="xl">
              Approximately 3.5 hours
            </Text>
          </HStack>
        </Box>
        <Box width="33%">
          <Img src="/images/munich.jpeg" sizes="50px" />
        </Box>
      </Stack>

      <Divider pt="40px" pb="40px" />

      <Stack direction="row" justify="space-between" pt="90px">
        <Box width="33%">
          <Heading width="70%" size="xl" lineHeight="50px">
            Berlin Highlights Bike Tour{" "}
          </Heading>
          <HStack mt="40px">
            <Text fontSize="xl">From </Text>
            <Text fontSize="2xl" color="blue.400">
              $32
            </Text>
          </HStack>
        </Box>
        <Box width="33%">
          <Text fontSize="xl" width="85%" color="gray.600">
            Come and see the best of Berlin in our amazing three-hour tour! You
            will visit of some of the hidden things you might pass.
          </Text>
          <HStack mt="30px">
            <HStack mr="30px" gap={1}>
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
            </HStack>
            <Text fontSize="xl">145 reviews</Text>
          </HStack>
          <HStack mt="30px">
            <BsClock size="20px" />
            <Text pl="30px" fontSize="xl">
              Approximately 3 hours
            </Text>
          </HStack>
        </Box>
        <Box width="33%">
          <Img src="/images/munich.jpeg" sizes="50px" />
        </Box>
      </Stack>

      <Divider pt="40px" pb="40px" />

      <Stack direction="row" justify="space-between" pt="90px">
        <Box width="33%">
          <Heading width="80%" size="xl" lineHeight="50px">
            Small Group VIP Versailles Bike Tour
          </Heading>
          <HStack mt="40px">
            <Text fontSize="xl">From </Text>
            <Text fontSize="2xl" color="blue.400">
              $165
            </Text>
          </HStack>
        </Box>
        <Box width="33%">
          <Text fontSize="xl" width="85%" color="gray.600">
            This is the ultimate way to see eveything that Versailles has to
            offer! Many people venture to this 16th century palace
          </Text>
          <HStack mt="30px">
            <HStack mr="30px" gap={1}>
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
              <BsStar size="30px" />
            </HStack>
            <Text fontSize="xl">180 reviews</Text>
          </HStack>
          <HStack mt="30px">
            <BsClock size="20px" />
            <Text pl="30px" fontSize="xl">
              Approximately 8.5 hours
            </Text>
          </HStack>
        </Box>
        <Box width="33%">
          <Img src="/images/munich.jpeg" sizes="50px" />
        </Box>
      </Stack>

      <Stack align="center" mt="80px" mb="20px">
        <Button
          width="20%"
          height="60px"
          bgColor="blue.300"
          borderRadius="30px"
          fontSize="20px"
        >
          Explore more
        </Button>
      </Stack>

      <Heading mt="100px" size="3xl" textAlign="center">
        Blog and articles
      </Heading>

      <Stack pt="70px" direction="row" justify="space-between">
        <Box width="50%">
          <Stack>
            <Box width="full" height="auto" bgColor="blue.400">
              <Img src="/images/hiking.jpeg" />
            </Box>
          </Stack>
          <Stack mt="30px" mb="40px">
            <Text fontSize="2xl" color="gray.600" mb="20px">
              Nov 14, 2022
            </Text>
            <Heading fontSize="4xl" pb="20px" width="80%">
              2022 Travel Trends - what you need to know
            </Heading>
            <Text fontSize="3xl" width="85%">
              2022 taught us valuable life lessons. Plans do not always work
              out, flexibility in life is key, a...
            </Text>
          </Stack>
        </Box>
        <Box width="50%">
          <Stack>
            <Box width="full" height="50%" bgColor="blue.400">
              <Img src="/images/hiking.jpeg" />
            </Box>
          </Stack>
          <Stack mt="30px" mb="40px">
            <Text fontSize="2xl" color="gray.600" mb="20px">
              Nov 10, 2022
            </Text>
            <Heading fontSize="4xl" pb="20px" width="80%">
              The Ultimate Guide to Hiking in Iceland{" "}
            </Heading>
            <Text fontSize="3xl" width="85%">
              Whether you are an avid hiker or you consider yourself to be more
              hike-curious, there is no...
            </Text>
          </Stack>
        </Box>
      </Stack>

      <Stack align="center" mt="80px" mb="20px">
        <Button
          width="20%"
          height="60px"
          bgColor="blue.300"
          borderRadius="30px"
          fontSize="20px"
        >
          View more
        </Button>
      </Stack>

      <Stack
        pl="100px"
        pr="100px"
        mt="50px"
        pt="70px"
        pb="70px"
        bgImage="/images/bgmotif.jpeg"
        flexDirection="row"
      >
        <Stack direction="column" width="60%">
          <Heading size="3xl" lineHeight="70px" width="80%">
            What our travellers are saying
          </Heading>
          <Heading
            pt="40px"
            size="xl"
            lineHeight="60px"
            color="gray.600"
            width="100%"
          >
            "Excellent! Enjoy the whole ride from the site to biking through
            some of the piazza restaurants. Saw some hidden gems in rome."{" "}
          </Heading>
          <HStack pt="20px">
            <Text fontSize="3xl"> - Mira Philips </Text>
            <Text fontSize="3xl" color="gray.600">
              (Rome Bike Tour){" "}
            </Text>
          </HStack>
          <HStack pt="40px" gap={5}>
            <Img boxSize="60px" bgColor="blue.300" borderRadius="30px" />
            <Img boxSize="60px" bgColor="blue.300" borderRadius="30px" />
          </HStack>
        </Stack>
        <Box width="40%" height="600px" bgColor="blue.400"></Box>
      </Stack>

      <Stack pt="100px" align="center">
        <Heading size="3xl" textAlign="center" width="60%">
          Your journey starts here{" "}
        </Heading>
        <Text pt="30px" pb="30px" fontSize="20px">
          Stay up to date with the latest information from us{" "}
        </Text>

        <Stack width="full" align="center" pb="100px" direction="row">
          <Button
            width="60%"
            height="60px"
            bgColor="gray.300"
            borderRadius="30px"
            fontSize="20px"
          >
            Enter your mail
          </Button>
          <Button
            alignSelf="right"
            width="20%"
            height="50px"
            bgColor="blue.300"
            borderRadius="30px"
            fontSize="20px"
          >
            Join our newsletter
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

HomeContainer.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default HomeContainer;
