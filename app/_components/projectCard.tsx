import {
  Divider,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useParams } from "next/navigation";
const Fade = require('react-reveal/Fade')

interface IProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<IProps> = ({
  project: { name, description, websites },
  index,
}: IProps) => {
  const [hover, setHover] = useState(false);
  const oddNumber = index % 2 === 0;
  const params = useParams();
  const [hash, setHash] = useState('')

  useEffect(() => {
    setHash(window.location.hash);
  }, [params, setHash]);
  return (
    <Link
      as={NextLink}
      href={websites.length > 0 ? `https://${websites[0].url}` : hash}
      w='100%'
     
    >
      <Fade bottom>
      <HStack
        className="link"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
       
        w={"100%"}
        flexDir={oddNumber ? "row" : "row-reverse"}
        alignSelf={oddNumber ? "start" : "end"}
      >
        <VStack h={"100%"}>
          <Heading
            w={12}
            justifyItems={"center"}
            textAlign={"center"}
            rounded="full"
            borderWidth={2}
            borderColor={"white"}
            textDecorationLine={'none'}
          >
            {index + 1}.
          </Heading>
          <Flex w={0.5} bg="white" minH={20} h="100%" />
        </VStack>
        <VStack alignSelf={"start"}>
          <Heading
            textDecorationLine={hover ? "underline" : "none"}
            alignSelf={oddNumber ? "start" : "end"}
          >
            {name}
          </Heading>
          <Text textDecorationLine={'blink'} alignSelf={"start"}>{description}</Text>
        </VStack>
      </HStack>
      </Fade>
    </Link>
  );
};

export default ProjectCard;
