import { getSkills } from "@repository/skills/skillsRepository";
import { useQuery } from "react-query";

const useFetchSkills = () => {
  const { data, isLoading, isError } = useQuery(["skills"], () => getSkills());
  return { skills: data, isLoading, isError };
};

export default useFetchSkills;
