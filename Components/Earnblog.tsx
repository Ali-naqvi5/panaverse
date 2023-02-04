import React, { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Center,
    VStack, HStack,
  } from '@chakra-ui/react';

  

export default function Earnblog() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 2) {
      setShowComponent(true);
    }
  };

  return (
    <>
      {showComponent && (
        <Container maxW={"5xl"} maxH={"4xl"} bg={"red.500"} rounded={"lg"} paddingTop={"40px"} paddingBottom={"35px"} mb={"20px"}>
           <VStack>
            <HStack spacing={'0'}>
            <Box className='slide-right-button'><Heading
            fontWeight={700}
            fontSize={{ base: '4xl', sm: '4xl', md: '4xl' }}
            lineHeight={'110%'}
            color={'white'}>
          <span style={{ color: "rgb(175, 1, 1)" }} >Earn </span>while You L<span style={{ color: "rgb(175, 1, 1)" }} >earn </span> <br />
            </Heading></Box>
            </HStack>

            <VStack>
                <Center> 
                <HStack bg={''}>
                <Text color={'white'} className={'slide-in-button'}>
                In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
                </Text>
                </HStack>
                <HStack  h={'150px'} w={'500px'}>
                <img
                className='slide-in-button'
            
            src='/earn.png'
            width={'150px'}
            height={'150px'}
          
            />   
                </HStack>
                </Center>
                
                
                
            </VStack>
            <Stack
            
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button className='slide-down-button'
              position={'-webkit-sticky'}
              colorScheme={'green'}
              bg={'red.400'}
              rounded={'full'}
              as={'a'}
              href={'/courses'}
              px={6}
              _hover={{
                bg: 'red.800',

                
              }}>
               Start Learning
            </Button>
            </Stack>
            

        </VStack>

        </Container>
      )}
    </>
  );
}
