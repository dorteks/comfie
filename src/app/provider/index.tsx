import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/ChakraTheme";

type Props = {
  children: React.ReactNode;
  pageProps: any;
};

const AppProvider = (props: Props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};

export default AppProvider;
