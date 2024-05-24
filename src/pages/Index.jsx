import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="#fff1e5" color="black" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="black">Home</Link>
            <Link href="#" color="black">News</Link>
            <Link href="#" color="black">Markets</Link>
            <Link href="#" color="black">Opinion</Link>
            <Link href="#" color="black">More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={8}>
        {/* Main Headline Section */}
        <Box flex="3" mr={{ md: 8 }} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="xl" mb={4}>Main Headline Article</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="#f3f2f1" p={4} borderRadius="md">
          <Heading as="h3" size="md" mb={4}>Trending News</Heading>
          <VStack align="start" spacing={4}>
            <Text>Trending news item 1</Text>
            <Text>Trending news item 2</Text>
            <Text>Trending news item 3</Text>
            <Text>Trending news item 4</Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="#fff1e5" color="black" py={4} mt={8}>
        <Flex justify="space-between" align="center" px={8}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" color="black">Contact</Link>
            <Link href="#" color="black">Privacy Policy</Link>
            <Link href="#" color="black">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;