import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProjects = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_BETTRDASH_API_URL!);
  return res.data;
};

export const useProjectsQuery = () => {
  const {
    data,
    isLoading: isFetchingProjects,
    isError: isErrorFetchingProjects,
  } = useSuspenseQuery<ProjectsResponse, Error>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return {
    projects: data.projects,
    isFetchingProjects,
    isErrorFetchingProjects,
  };
};
