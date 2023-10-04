"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FiChevronDown, FiCornerDownRight } from "react-icons/fi";
import Arrow from "./_components/Arrow";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useParams, usePathname } from "next/navigation";
import AnimatedCursor from "react-animated-cursor";
import Nav, { navItems } from "./_components/nav";
import Projects from "./sections/projects";
import ParticlesBackground from "./_components/background/particles";
import { useWasSeen } from "./utils/isInView";
export default function Home() {
  const [showBottom, setShowBottom] = useState(false);
  const [section, setSection] = useState("#home");
  const params = useParams();

  useEffect(() => {
    setSection(window.location.hash);
  }, [params]);
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <Flex
        id="home"
        flexDir={"column"}
        w="100%"
        h="auto"
        minH="100vh"
        bg="#F15152"
      >
        <Flex w="100%" h="100vh">
          <Center
            color="blue.800"
            flexDir={"column"}
            w="100%"
            h="100%"
            zIndex={1}
            transform={showBottom ? "translateY(-12vh)" : "translateY(0)"}
            transition={"all 0.5s ease"}
            backgroundColor="gray.300"
            // opacity={"0.8"}
            backgroundImage={"radial-gradient(gray.50 2px, transparent 0.5px)"}
            backgroundSize={"40px 40px"}
            backgroundPosition={"0 0, 100px 100px"}
          >
            <Heading fontSize={"6xl"}>
              Hi<span style={{ fontWeight: "200" }}>{" I'm,"}</span>
            </Heading>
            <Flex>
              <Flex
                className="link"
                mt={12}
                justify={"space-between"}
                flexDir={"column"}
                bg="red"
              >
                <Flex
                  justify={"center"}
                  flexDir={"column"}
                  className="container"
                >
                  <Heading
                    px={"8"}
                    bg="white"
                    zIndex={1}
                    color="blue.400"
                    fontSize="8xl"
                    fontWeight="extrabold"
                    as="h1"
                    pos="absolute"
                  >
                    ELIAS WAMBUGU
                  </Heading>
                  <Heading
                    px={"8"}
                    zIndex={1}
                    bg="white"
                    color="blue.400"
                    fontSize="8xl"
                    fontWeight="extrabold"
                    as="h1"
                    top="50%"
                  >
                    ELIAS WAMBUGU
                  </Heading>
                  <Text
                    zIndex={0}
                    alignSelf={"center"}
                    bg="blue.400"
                    fontSize={"3xl"}
                    bgGradient="linear(to-r,  blue.800, blue.400, blue.400, blue.800)"
                    bgClip="text"
                    fontWeight={"900"}
                    pos="absolute"
                    justifySelf={"center"}
                  >
                    FULL STACK DEVELOPER
                    <span style={{ fontSize: "50px" }}>.</span>
                  </Text>
                </Flex>
              </Flex>
              <Box
                right={{ base: "4%", lg: "5%", "2xl": "12%" }}
                pos="absolute"
                flexDir={"column"}
                color="#F15152"
              >
                <Text
                  transform={"rotate(20deg)"}
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  mr={53}
                >
                  Hover over me
                </Text>
                <Icon
                  color="white"
                  transform="rotate(-20deg)"
                  as={Arrow}
                  w={71}
                  h={71}
                />
              </Box>
            </Flex>
          </Center>
          <Center
            bottom={`${(navItems.length - 1) * 100}vh`}
            mb={8}
            zIndex={2}
            w="100%"
            pos="absolute"
          >
            <Link
              alignContent={"center"}
              as={NextLink}
              href="#projects"
              id="arrow-container"
              className="link"
              flexDir={"column"}
              onMouseEnter={() => setShowBottom(true)}
              onMouseLeave={() => setShowBottom(false)}
            >
              <Text
                textDecorationLine={"none"}
                color="#F15152"
                fontWeight={"bold"}
                fontSize={"lg"}
                textAlign={"center"}
              >
                Explore
              </Text>
              <Center alignContent={"center"} w={"100%"} flexDir={"column"}>
                <Icon
                  w={12}
                  h={12}
                  className="arrow"
                  id="arrow-1"
                  as={FiChevronDown}
                  color="blue.50"
                  zIndex={2}
                />
                <Icon
                  className="arrow"
                  id="arrow-2"
                  mt={-8}
                  as={FiChevronDown}
                  color="blue.200"
                  w={12}
                  h={12}
                />
                <Icon
                  zIndex={1}
                  className="arrow"
                  mt={-8}
                  as={FiChevronDown}
                  color="blue.400"
                  w={12}
                  h={12}
                />
              </Center>
            </Link>
          </Center>
        </Flex>
        <Nav section={section} showPreview={showBottom} />
        <Suspense fallback={null}>
          <Projects section={section} mouseAction={setSection} />
        </Suspense>
      </Flex>
    </>
  );
}
