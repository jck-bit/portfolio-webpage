import { Heading, Box, Image, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Transition from "./Transition";
import { Link } from "react-router-dom";

export const Title = ({ children }) => (
    <Transition direction="left">
    <Box display={"flex"}>
      <Link to="/portfolio">
        Projects
      </Link>
    <span>
        {' '}
        <ChevronRightIcon/>{' '}
    </span>
    <Heading as="h3" display="flex" paddingLeft={"2px"} fontSize={20} mb={4}>
        { children }    
    </Heading>
</Box>
</Transition>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="12px" w="full" src={src} alt={alt} h="auto" objectFit="cover" mb={4} />
)

export const Meta = ({children}) =>(
    <Badge colorScheme="green" mr={2}>
    { children}
</Badge>
)