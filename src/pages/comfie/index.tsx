import Layout from "@/layouts";
import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import HomeContainer from "@/container/homeContainer";

const Home = () => {
  return (
    <Box>
      <HomeContainer />
    </Box>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
