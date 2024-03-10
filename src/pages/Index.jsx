import { Box, Container, Heading, Text, VStack, HStack, Image, Divider, Center, useColorModeValue } from "@chakra-ui/react";
import { FaAppleAlt, FaCookieBite, FaLeaf } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        <Center>
          <Heading as="h1" size="2xl" mb={4}>
            About Nibble Nook
          </Heading>
        </Center>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1676801371068-9c4586f18c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmFjayUyMHNob3B8ZW58MHx8fHwxNzEwMDM0NzY4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Nibble Nook" />
        <Box py={5} px={6} bg={bgColor} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" mb={4}>
            Who We Are
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Welcome to Nibble Nook, your go-to destination for delightful and delectable snacks! We are passionate about providing you with a diverse range of snacks that suit every taste bud. From savory to sweet, our snacks are carefully curated to offer you the perfect nibble for any occasion.
          </Text>
        </Box>

        <Box py={5} px={6} bg={bgColor} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" mb={4}>
            Our Mission
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Our mission is to bring joy to your snacking experience. We believe that a great snack can make your day better, and we're here to ensure that you always have access to high-quality, delicious options that are as unique as you are.
          </Text>
        </Box>

        <Divider my={8} />

        <Heading as="h2" size="xl" mb={4}>
          What Makes Us Different
        </Heading>
        <HStack spacing={8} justify="center">
          <VStack spacing={4} align="center">
            <FaAppleAlt size="3em" />
            <Text fontSize="lg" fontWeight="semibold">
              Fresh Ingredients
            </Text>
            <Text textAlign="center" color={textColor}>
              We use only the freshest and finest ingredients in all of our snacks to ensure the best taste and quality.
            </Text>
          </VStack>
          <VStack spacing={4} align="center">
            <FaCookieBite size="3em" />
            <Text fontSize="lg" fontWeight="semibold">
              Unique Flavors
            </Text>
            <Text textAlign="center" color={textColor}>
              Our snacks come in a variety of unique flavors that are sure to satisfy your adventurous taste buds.
            </Text>
          </VStack>
          <VStack spacing={4} align="center">
            <FaLeaf size="3em" />
            <Text fontSize="lg" fontWeight="semibold">
              Eco-friendly Packaging
            </Text>
            <Text textAlign="center" color={textColor}>
              We are committed to sustainability, which is why we use eco-friendly packaging for all our products.
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
