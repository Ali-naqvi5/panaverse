"use client"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Container,
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
} from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      
      <body><ChakraProvider>
      
     
        {children}
        
        

        
        </ChakraProvider>
        
        </body>
    </html>
  )
}
