"use client"
import { SVGProps } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue,
  Center
} from '@chakra-ui/react';


import SocialButton from "@/Components/Footer";

interface IFeature {
  heading: string;
  content: string;
  href: string;
  icon: SVGProps<SVGElement>
  
}

const features: IFeature[] = [
  
  
  {
    heading: 'Artificial Intelligence',
    content: 'A one-year program designed for absolute beginners to prepare Pakistan for the new era of computing enabled by the rise of Artificial Intelligence (AI). The program is aimed at helping participants gain the skills and knowledge necessary to participate in the growing field of AI.',
    href : '/ai' ,
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Cloud Native Computing and Mobile Web',
    content: 'A one year cloud computing program designed for absolute beginners. Getting Pakistan ready for the new era of Microservices and Multi-Cloud native computing.',
    href : '/cnc' ,
     icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'BlockChain',
    content: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.',
    href : 'dweb' ,
     icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Ambient Computing and IoT',
    content: 'A fifteen-month program designed for absolute beginners aimed at preparing Pakistan for the new era of the Internet of Things (IoT) and Artificial Intelligence (AI). The program focuses on helping participants develop the skills and knowledge necessary to participate in the new era of IoT and AI.',
    href : '/iot' ,
      icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Metaverse',
    content: 'This Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.',
    href : 'dweb' ,
      icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  
  {
    heading: 'Genomics and Bioinformatics Specialization',
    href : 'geo' ,
      content: 'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Network Programmability and Automation Specialization',
    content: 'Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile',
    href : 'network' ,
     icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  }
];

const Features = () => {
  return (
    <Box>

   
    <Container bg={'red.300'} maxW="8xl" p={{ base: 5, md: 10 }}>
    <Center><Box className='slide-rotate-button' _hover={{ bg: 'transparent', color :'white',transform: 'scale(1.2)', transition : 'all .5s ease-in-out'}} >
                <img
            
            src='/panaverse.svg'
            width={'150px'}
            height={'150px'}
          
            />
                </Box></Center><Box  h={'400px' }  >
       <Center> <chakra.h3  fontSize="4xl" fontWeight="bold" mb={20} mt={'140px'} textAlign="center" color={'white'}>
        Arm <span style={{ color: "Red" }}> YOURSELF </span> with following weapons
      </chakra.h3> </Center>
      </Box>
      
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {features.map((feature, index) => (
          <Box
            key={index}
            as={'a'}
            
            transition={'all .3s ease-in-out'}
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
            _hover={{
                bg: '#b50505', color :'white',transform: 'scale(1.1)',
              }}
              _active={{
                bg: '#b50505', color :'white' , transform: 'scale(0.9)' , 
              }}
          >
              <a href={feature.href}>

            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient='linear(to-l, #d1111b, #6b0000)'
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="sm" mt={4}>
              {feature.content}
            </Text>
            </a>
            {/* <Box>
            <Link href="feature.href" mt={4} fontSize="sm" color="blue">
              Learn more →
            </Link>
            </Box> */}
          </Box>
        ))}
      </SimpleGrid>
      
    </Container>
    <SocialButton/>
    </Box>
  );
};

export default Features;