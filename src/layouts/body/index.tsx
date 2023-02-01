import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Body = (props: Props) => {
  return <Box> {props.children} </Box>;
};

export default Body;
