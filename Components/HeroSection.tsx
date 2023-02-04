import Head from 'next/head';
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
import '../styles/style.css'

export default function HeroSection() {
    return (
        <>
        <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container maxW={'5xl'} mt={'30px'} maxH={'4xl'}  bg={'red.500'} rounded={'lg'} paddingTop={'40px'} paddingBottom={'35px'} mb={'20px'}>
        <VStack>
            <HStack spacing={'0'}>
                <Box className='slide-rotate-button'>
                <img
            
            src='/panaverse.svg'
            width={'150px'}
            height={'150px'}
          
            />
                </Box>
                <Box className='slide-left-button'><Heading
            fontWeight={700}
            fontSize={{ base: '4xl', sm: '4xl', md: '4xl' }}
            lineHeight={'110%'}
            color={'white'}>
           Panaverse <span style={{ color: "rgb(175, 1, 1)" }} > DAO </span> <br />
            </Heading></Box>b      
            </HStack>

            <Stack>
                <Text color={'white'} className={'slide-in-button'}>
                The mission of <b className='big-text'>Panaverse</b> is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
                </Text>
            </Stack>
            <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
              
            <Button className='slide-down-button'
            position={'relative'}
              colorScheme={'green'}
              bg={'red.400'}
              rounded={'full'}
              as={'a'}
              href={'https://rb.gy/vmrgvy'}
              px={6}
              _hover={{
                bg: 'red.800',

                
              }}>
               Manifesto
            </Button>
            </Stack>
            

        </VStack>

      </Container>
      </>
    );
}
