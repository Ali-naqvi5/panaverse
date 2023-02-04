import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    scaleFadeConfig,
    color,
    background,
    Container,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      
      <Box py ={"10px"} position={'relative'} zIndex={'100'}>
        <Flex 
        
          flex={{ base: 1, md: 'auto' }}
             color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 , md : 'auto' }}
          borderRadius={"10px"} 
          borderTop ={"5px"}
          boxShadow='xxl' p='6' rounded='md' bg='red.400'
          h={"30px"}
 
            
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          
            
            <Box className='slide-rotate-button' as={'a'}
            
            transition={'all .6s ease-in-out'}
            href={'https://www.piaic.org/'}
             
             _hover={{ transform:'scale(0.8)' ,
            }}><img
            
            src='/panaverse.svg'
            width={'150px'}
            height={'150px'}
          
            />
            </Box>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
          
            <Button
            as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#fa0404'}
              href={'https://www.piaic.org/'}
              _hover={{
                bg: '#b50505', color :'white',transform: 'scale(1.2)',
              }}
              _active={{
                bg: '#b50505', color :'white' , transform: 'scale(0.9)' , 
              }}>
              Apply Now
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'white.200');
    const linkHoverColor = useColorModeValue('gray.300', 'white');
    const popoverContentBgColor = useColorModeValue('#b50505', 'grey');
  
    return (
      <Stack direction={'row'} spacing={6} padding={'35px'}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'md'}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                    transform: 'scale(1.2)'
                    
                  }}
                  _active={{transform: 'scale(0.9)'}}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  color={'white'}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child}/>
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('#fa0404', 'gray.900') , color : "white" , transform:"scale(1.15)" }}
        _active={{transform:'scale(0.9)'}}>
        <Stack direction={'row'} align={'center'} borderStyle='solid'>
          <Box >
            
            <Text
              transition={'all .3s ease-in-out'}
              _groupHover={{ color: 'white' }}
              fontWeight={500}
              >
                
              {label}
            </Text>
            <Text fontSize={'sm'}
             color = 'grey.900'
             _hover ={{
              
            }}>{subLabel}
           
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform:'scale(1.2)', textColor:"white"}}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'white'} w={8} h={8} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            _hover ={{
              transform: "scale (0.5)"
            }}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [ 
    {
      
      label: 'Courses',
      children: [
        {
          label: 'BlockChain',
          subLabel: 'Learn the fundamentals of blockchain technology and its applications in finance, supply chain, and more through hands-on projects and real-world case studies',
          href: '/dweb',
        },
        {
          label: 'Web 3.0 and Metaverse',
          subLabel: 'Explore the cutting-edge world of the Metaverse, including virtual reality and decentralized platforms.',
          href: '/dweb',
        },
        {
          label: 'Artificial Intelligence',
          subLabel: '"Gain a comprehensive understanding of Artificial Intelligence concepts, techniques and technologies through hands-on projects',
          href: '/ai',
        },
        {
          label: 'Cloud Native and Computing',
          subLabel: 'Up-and-coming Designers',
          href: '/cnc',
        },{
          label: 'Internet Of Things',
          subLabel: 'Learn the fundamentals of cloud computing, including infrastructure, storage, security and network management',
          href: 'iot',
        },
        {
          label: 'Genomics and Bioinformatics Specialization',
          subLabel: 'Dive into the exciting field of genomics and bioinformatics',
          href: 'geo',
        },
      ],
    },
    {
      label: 'About us',
      children: [
        {
          label: 'Panaverse Community',
          subLabel: 'A community with a vision and a mission',
          href: '#',
        },
        {
          label: 'Our Mission',
          subLabel: 'Making Pakistan one of the biggest contributors in fourth IR',
          href: '/panac',
        },
      ],
      },

    
  ];