import { getProjects } from "@repository/projects/projectsRepository";
import { useQuery } from "react-query";

const useFetchProjects = () => {
  const { data, isLoading, isError } = useQuery(["projects"], () =>
    getProjects()
  );
  return { projects: data, isLoading, isError };
};

export default useFetchProjects;
