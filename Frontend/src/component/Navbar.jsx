import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const links = [
    {
        to : "/",
        label : "HOME"
    },
    {
        to : "/login",
        label : "LOGIN"
    },
    {
        to : "/PRODUCTS",
        label : "PRODUCTS"
    },

]
export default function Navbar(){
    return <Flex justify="space-around" color="gray.900" backgroundColor={"gray.100"} padding={4}>
        {links.map(function(link){
            return <Link to={link.to} link = {link.to}>{link.label}</Link>
        })}
    </Flex>
}