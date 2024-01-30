import { ProjectType } from "@ProjectType";
import { SkillType } from "@SkillType";
import useFetchSkills from "@hooks/skills/useFetchSkills";

type Props = {
  project: ProjectType;
};

const Project = ({ project }: Props) => {
  const { skills } = useFetchSkills();

  const goToProject = () => {
    window.open(project.url, "_blank");
  };

  return (
    <li
      className="w-full flex justify-between gap-x-6 py-5 cursor-pointer hover:bg-gray-100"
      title={project.name}
      onClick={goToProject}
    >
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-24 w-24 flex-none rounded-full "
          src={project.photo}
          alt={project.name}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-lg font-semibold leading-6 text-gray-900">
            {project.name}
          </p>
          <p className="md:visible invisible md:mt-1 truncate text-md leading-5 text-gray-500">
            {project.description}
          </p>
          <div className="flex gap-2 md:mt-1">
            {project.skills?.map((skill: SkillType["name"]) => {
              const currentSkill = skills?.find(
                (s: SkillType) => s.name === skill
              ) as SkillType;
              return (
                <img
                  key={`${project.name}-${skill}`}
                  className="w-auto h-5"
                  src={currentSkill?.icon}
                  alt={skill}
                />
              );
            })}
          </div>
        </div>
      </div>
    </li>
  );

  //   return (
  //     <div
  //       onClick={() => goToProject()}
  //       className="flex flex-wrap md:w-1/3 w-full"
  //       title={project.name}
  //     >
  //       <div className="relative w-full m-2 md:m-3 cursor-pointer">
  //         <img
  //           alt={project.name}
  //           className="block object-cover object-center w-full h-full rounded-lg"
  //           src={project.photo}
  //         />
  //         <div
  //           className="absolute top-0 right-0 rounded-lg bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex flex-col items-center justify-center p-5"
  //           style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
  //         >
  //           <h1 className="text-white font-bold uppercase text-1xl md:text-3xl max-w-full px-5 truncate">
  //             {project.name}
  //           </h1>
  //           <div className="flex flex-row gap-2 mt-5">
  //             {project.skills?.map((skill: string) => {
  //               const currentSkill = skills?.find(
  //                 (s: SkillType) => s.name === skill
  //               ) as SkillType;
  //               return (
  //                 <img
  //                   key={`${project._id}-${skill}`}
  //                   className="w-auto h-8"
  //                   src={currentSkill?.icon}
  //                   alt={currentSkill?.name}
  //                 />
  //               );
  //             })}
  //           </div>
  //         </div>
  //       </div>
  //       <h1 className="md:invisible visible text-center w-full">
  //         {project.name}
  //       </h1>
  //     </div>
  //   );
};

export default Project;
