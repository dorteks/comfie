import { Box } from "@chakra-ui/layout";
import React from "react";
import DesktopLandingPage from "./desktop";
import MobileLandingPage from "./mobile";

const LandingPage = () => {
  return (
    <Box>
      <MobileLandingPage />
      <DesktopLandingPage />
    </Box>
  );
};

export default LandingPage;
