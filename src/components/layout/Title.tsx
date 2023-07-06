import { Heading } from "@chakra-ui/layout";

export const Title: React.FC = ({ children }) => (
  <Heading fontSize="lg" mb={5}>
    {children}
  </Heading>
);
