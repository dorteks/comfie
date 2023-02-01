import { Box } from "@chakra-ui/react";
import React from "react";
import Body from "./body";
import Footer from "./footer";
import Topbar from "./topbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Box>
      <Topbar />
      <Box>
        <Body>{props.children}</Body>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
