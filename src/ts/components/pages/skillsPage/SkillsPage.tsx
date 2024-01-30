import AlertBox from "@components/primitives/alertBox/AlertBox";
import useFetchSkills from "@hooks/skills/useFetchSkills";
import { SkillType } from "@SkillType";
import Skill from "./components/Skill";
import Slider from "./components/Slider";

const SkillsPage = () => {
  const { skills } = useFetchSkills();

  return (
    <div className="my-24 md:h-screen h-fit w-full flex justify-center items-center py-24 px-24">
      <div
        id="skills"
        className="w-full h-full flex justify-center items-center flex-col gap-5"
      >
        <h1 className="text-5xl mt-24 font-thin">Skills</h1>
        <div className="container md:px-10 md:py-10 md:w-3/4">
          <div className="flex flex-col gap-10">
            {skills ? (
              skills?.length > 0 ? (
                skills?.map((skill: SkillType) => (
                  <div
                    key={skill._id}
                    className="relative grid md:grid-cols-[400px_minmax(1000px,1fr)_100px] w-full"
                  >
                    <Skill skill={skill} />
                    <Slider skill={skill} />
                  </div>
                ))
              ) : (
                <AlertBox color="orange" message="No skills found" />
              )
            ) : (
              <AlertBox
                color="red"
                message="Something went wrong. Please try again later."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
