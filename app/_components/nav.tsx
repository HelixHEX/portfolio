import { HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const navItems = [
  {
    name: "home",
    path: "#home",
  },
  // {
  //   name: "about me",
  //   path: "#about",
  // },
  {
    name: "projects",
    path: "#projects",
  },
];

interface IProps {
  showPreview: boolean;
  section: string;
}
const Nav: React.FC<IProps> = ({ showPreview, section }: IProps) => {
  return (
    <HStack
      spacing={8}
      transitionDelay={"0.5s"}
      transition={"ease-in-out 0.5s"}
      w="100%"
      justify={"center"}
      pos="sticky"
      zIndex={1}
      top={showPreview ? 0 : 10}
    >
      {navItems.map((item, index) => (
        <Link
          fontSize={"lg"}
          fontWeight={"medium"}
          _hover={{ textDecoration: "underline", transition: "0.3s" }}
          href={item.path}
          key={index}
          as={NextLink}
          textDecorationLine={section === item.path ? "underline" : "none"}
        >
          {item.name}
        </Link>
      ))}
    </HStack>
  );
};

export default Nav;
