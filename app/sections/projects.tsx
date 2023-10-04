import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useProjectsQuery } from "../libs/api/queries";
import ProjectCard from "../_components/projectCard";

interface IProps {
  mouseAction: (url: string) => void;
  section: string;
}
const Projects = ({ mouseAction, section }: IProps) => {
  const { projects } = useProjectsQuery();

  return (
    <Flex
      onMouseEnter={() => mouseAction("#projects")}
      onMouseLeave={() => mouseAction("#main")}
      // bg='blue.400'
      flexDir="column"
      id="projects"
      w="100%"
      h="100vh"
      overflowY="scroll"
      pt={20}
      px={20}
    >
      <VStack mb={24} spacing={24}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </VStack>
      <Text mb={8} fontWeight={"bold"} fontSize="lg" alignSelf="center">
        Made with ❤️  Elias Wambugu
      </Text>
    </Flex>
  );
};

export default Projects;
