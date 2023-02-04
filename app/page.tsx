"use client"




import { Flex, Container,Box } from "@chakra-ui/react"
import HeroSection from "@/Components/HeroSection"
import SplitWithImage from "@/Components/Feature"
import SocialButton from "@/Components/Footer"
import NavBar from "@/Components/Navbar"
import Earnblog from "@/Components/Earnblog"
import Testimonial from "@/Components/stud"



export default function Home() {
  return (
    <Box h={'100%'} w={'100%'} bg={'red.200'}>
    

    <Flex bg={'red.200'} as="header" position="fixed" align={'center'} 
 w="100%">
        <Container as="main" maxWidth={"100%"} borderRadius={"0px"} >
      <NavBar />
       </Container>
     </Flex>
         <SplitWithImage/>
          <HeroSection/>
           <Earnblog/>
           <Testimonial/>
          <SocialButton /></Box>
  )
}
