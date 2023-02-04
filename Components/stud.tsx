import { Container, Text, VStack, Box, Avatar, Icon, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { FaQuoteRight } from 'react-icons/fa';

interface TestimonialAttributes {
  username: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonial: TestimonialAttributes = {
  username: 'ALI NAQVI',
  position: 'Student',
  company: 'Panaverse',
  image:
   '/ssdds.jpg',
  content: `My name is Syed Muhammad Ali Naqvi. This website is not complete at the time of submission`
};

const Testimonial = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <VStack
        spacing={3}
        p={{ base: 4, sm: 8 }}
        bg={useColorModeValue('white', 'blackAlpha.600')}
        borderTop="4px solid"
        borderColor="#b50505"
        borderBottomLeftRadius="lg"
        borderBottomRightRadius="lg"
        maxW="25rem"
        margin="0 auto"
        boxShadow="lg"
      >
        <Icon as={FaQuoteRight} w={8} h={8} color="#b50505" />
        <Text p={5} color="gray.500">
          {testimonial.content}
        </Text>
        <VStack alignItems="center">
          <Avatar name="avatar" src={testimonial.image} size="lg" />
          <Box textAlign="center">
            <Text fontWeight="bold" fontSize="lg">
              {testimonial.username}
            </Text>
            <Text fontSize="md" color="gray.500">
              {testimonial.position} at {testimonial.company}
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Testimonial;