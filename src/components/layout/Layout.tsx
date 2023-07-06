import { Box, Center, Container, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const img = new URL("./logo-intesys.png", import.meta.url).href;

export const Layout: React.FC = ({ children }) => (
  <Center>
    <Stack>
      <Image src={img} w={100} my={15} />
      <Container borderRadius={10} m={10} p={10} background="#fff">
        <Stack w="90%" spacing={7}>
          <Header />
          <Box w="450px">{children}</Box>
          <Footer />
        </Stack>
      </Container>
    </Stack>
  </Center>
);
