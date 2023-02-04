"use client"

import {
    Flex, Box, FormControl,  FormLabel, Input, InputGroup,HStack,Container, InputRightElement, Stack,  Button,  Heading,Text,  useColorModeValue,  Link, Center,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import NavBar from '@/Components/Navbar';
  
  
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <Box>
      <Flex bg={'red.200'} as="header" position="fixed" align={'center'} 
      w="100%">
             <Container as="main" maxWidth={"100%"} borderRadius={"0px"} >
           <NavBar />
            </Container>
          </Flex> 
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('red.200', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color={'#fa0404'}>
              Register
            </Heading>
            <Text fontSize={'lg'} color={'red.800'}>
              To recieve updates via email.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('red.500', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel color={'white'}>First Name</FormLabel>
                    <Input type="text" color={'white'} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel color={'white'}>Last Name</FormLabel>
                    <Input type="text" color={'white'} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel color={'white'}>Email address</FormLabel>
                <Input type="email" color={'white'} />
              </FormControl>
              {/* <FormControl id="password" isRequired>
                <FormLabel color={'white'}>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} color={'white'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl> */}
              <FormControl id="status" isRequired>
                <FormLabel color={'white'}>Professional Status</FormLabel>
                <Input type="text" color={'white'} />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Center><Button
                  loadingText="Submitting"
                  h={'40px'} w={'100px'}
                  bg={'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'red.800', transform: 'scale(1.2)'
                  }}
                  _active={{transform: 'scale(0.9)'}}>
                  Register
                </Button></Center>
                
              </Stack>
          </Stack>
          </Box>
         
        </Stack>
      </Flex>
      </Box>
    );
     }
