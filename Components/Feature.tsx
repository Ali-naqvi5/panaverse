import {
  Container,
  
  Flex,
 Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Box,
  Highlight,
  Icon,
  
  Button,
  ColorModeContext,
  } from '@chakra-ui/react';
  import { Center, Square, Circle } from '@chakra-ui/react'
  import {

  IoLogoFacebook,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,

  } from 'react-icons/io5';
  import { ReactElement } from 'react';

  import { useState, useEffect } from 'react'
  import '../styles/style.css'
  interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
  <Stack direction={'row'} align={'center'}>
  <Flex
  w={8}
  h={8}
  
  
      align={'center'}
      justify={'center'}
      rounded={'full'}
      bg={iconBg}>  
      {icon}
    </Flex>
    <Text fontWeight={600}>{text}</Text>
  </Stack>
  );
  };
  
  interface SplitWithImageProps {
  
  }
  
  export default function SplitWithImage({}: SplitWithImageProps) {
  const [text] = useState (" Metaverse is no longer just a concept, it's a reality that we can all be a part of. The future is in our hands and the opportunities are endless. With the right mindset, hard work and perseverance, anyone can tap into the potential of web 3 and the metaverse to create wealth and abundance in their lives. The possibilities are endless and the time is now to take action and create your own digital legacy.");
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<number | any>(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [isH, setIsH] = useState(false);
  const [isHov, setIsHov] = useState(false);
  const [isHove, setIsHove] = useState(false);
  
  useEffect(() => {
  const id = setInterval(() => {
  setIndex( prevIndex => prevIndex + 1 )
  
 
    if (index === text.length) {
      clearInterval(intervalId);
    }
  }, 25);
  setIntervalId(id);
  return () => clearInterval(intervalId);
  }, [index, text, intervalId]);
  
  return (
  
 
  <Container maxW={'68rem'} py={"85px"} paddingX={'-1'} height="510px">
    
    <Box rounded="19px" mt={'50px'} width="100%" height="100%" bg="url('ss.png')" backgroundSize="cover">
  
      <Stack direction={"row"} alignContent={'center'} color={'white'} spacing={'400px'} px={'30px'}>
        <Box w='300px' h='330px'  fontFamily={'Arial'} fontWeight={'thin'} color={'White'} display='flex' alignItems='center' justifyContent='center'>
        {text.substring(0, index)}
       
          
        </Box>
        <Box w='300px' bg={''} h='330px' fontFamily={'Arial'} fontWeight={'thin'} color={'White'} display='flex' paddingY={'30px'} alignItems='Top' justifyContent='center'>
        <VStack alignContent={'center'} spacing={'20px'}>

          
        <Button className='slide-in-button'
            as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              position={'-webkit-sticky'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#fa0404'}
              href={'/email'}
              
              _hover={{
                bg: '#fa0404', color :'white',transform: 'scale(1.2)',
              }}
              _active={{
                bg: 'red.300', color :'white' , transform: 'scale(0.9)' , 
              }}>
              Join Our Community
            </Button>
           
            <HStack>

            <Box>
              <Button  position={'-webkit-sticky'} as={'a'}  className="slide-in-button" transition="all 0.3s ease-in-out" href={'https://github.com/panaverse'} bg={'transparent'} w={12} h={12}  _hover={{
                bg: 'Black',transform: 'scale(1.2)',
              }}
              _active={{
                bg: 'Black', transform: 'scale(0.9)' , 
              }}><Icon as={IoLogoGithub} color={'red'} w={10} h={10} /></Button>
              
              
            
           
             
            </Box>
            <Box>
              <Button  position={'-webkit-sticky'} as={'a'}  className="slide-in-button" transition="all 0.3s ease-in-out" href={'https://twitter.com/Panaverse_edu'} bg={'transparent'} w={12} h={12}  _hover={{
                bg: 'Black',transform: 'scale(1.2)',
              }}
              _active={{
                bg: 'Black', transform: 'scale(0.9)' , 
              }}><Icon as={IoLogoTwitter} color={'red'} w={10} h={10} /></Button>
              
              
            
           
             
            </Box>
            <Box>
              
              
              <Button position={'-webkit-sticky'} as={'a'} className="slide-in-button" transition="all 0.3s ease-in-out" href ={'https://www.youtube.com/@panaverse'} bg={'transparent'} w={12} h={12} _hover={{
                bg: 'Black',transform: 'scale(1.2)',
              }}
              _active={{
                bg: 'Black', transform: 'scale(0.9)' , 
              }}><Icon as={IoLogoYoutube} color={'red'} w={9} h={9} /></Button>
            
           
             
            </Box>
            <Box>
              
              
              <Button position={'-webkit-sticky'} as={'a'}  className="slide-in-button"   transition="all 0.3s ease-in-out"
                  href={'https://www.facebook.com/panaverse.dao'} bg={'transparent'} w={12} h={12} _hover={{
                bg: 'Black',transform: 'scale(1.2)',
              }}
              _active={{
                bg: 'Black', transform: 'scale(0.9)' , 
              }} ><Icon as={IoLogoFacebook} color={'red'} w={10} h={10} /></Button>
            
           
             
            </Box>
            <Box>
              
              
              <Button position={'-webkit-sticky'} as={'a'}  className="slide-in-button"   transition="all 0.3s ease-in-out"
                  href={'#'} bg={'transparent'} w={12} h={12} _hover={{
                bg: 'Black',transform: 'scale(1.2)',
              }}
              _active={{
                bg: 'Black', transform: 'scale(0.9)' , 
              }} ><Icon as={IoLogoWhatsapp} color={'red'} w={10} h={10} /></Button>
            
           
             
            </Box>
            
            </HStack>
              <Box bg={' '} w={'400px'}  h={'200px'} marginTop={'50px'}>
                <Center h={'150px'} >
                  <VStack>
                    <HStack spacing={'30px'} marginTop={'50px'}>
                      <Box className='slide-right-button'>
                        <Button
                         h={'40px'}
                         w={'150px'}
                         color={'white'}
                         bg ={'transparent'}
                         position={'-webkit-sticky'}
                         _hover={{ bg: 'transparent', color :'white',transform: 'scale(2)', }}
                            onMouseEnter={() => setIsHovered(true)}
                             onMouseLeave={() => setIsHovered(false)}> {isHovered ? "3500+" : "| DAO Members "}</Button>
                        </Box>
                        <Box className='slide-left-button'>
                        <Button
                        h={'40px'}
                        w={'150px'}
                        color={'white'}
                        bg ={'transparent'}
                        position={'-webkit-sticky'}
                        _hover={{ bg: 'transparent', color :'white',transform: 'scale(2)', }}
                            onMouseEnter={() => setIsH(true)}
                             onMouseLeave={() => setIsH(false)}> {isH ? "5000+" : "| Students "}</Button>
                          </Box>
                    </HStack>
                    <HStack spacing={'30px'} paddingY ={'20px'}>
                      <Box className='slide-right-button'>
                
                        <Button
                         h={'40px'}
                         w={'150px'}
                         color={'white'}
                         bg ={'transparent'}
                         position={'-webkit-sticky'}
                         _hover={{ bg: 'transparent', color :'white',transform: 'scale(2)', }}
                            onMouseEnter={() => setIsHov(true)}
                             onMouseLeave={() => setIsHov(false)}> {isHov ? "25+" : "| Faculty "}</Button>
                        </Box>
                        <Box className='slide-left-button'>
                        <Button
                        h={'40px'}
                        w={'150px'}
                        color={'white'}
                        bg ={'transparent'}
                        position={'-webkit-sticky'}
                        _hover={{ bg: 'transparent', color :'white',transform: 'scale(2)', }}
                            onMouseEnter={() => setIsHove(true)}
                             onMouseLeave={() => setIsHove(false)}> {isHove ? "10K+" : "| Followers "}</Button>
                          </Box>
                    </HStack>
                    <Box>
                    <Heading className='slide-down-button'
            fontWeight={700}
            fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }}
            lineHeight={'110%'}>
                                   Making
                        <span style={{ color: "Red" }}> Pakistan </span> 
                        Proud
                        </Heading>
                        
                        </Box>
                   
                  </VStack>
                  
                  </Center>
                
              </Box>
            </VStack>
          
        </Box>
  
      
      </Stack>
    
    </Box>
  </Container>
  );
  } 