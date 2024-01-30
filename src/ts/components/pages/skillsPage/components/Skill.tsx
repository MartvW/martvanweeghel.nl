import { SkillType } from "@SkillType";

type Props = {
  skill: SkillType;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-4 md:grid-cols-5 md:justify-center">
        <img src={skill.icon} alt={skill.name} className="w-auto h-8" />
        <h1 className="text-black truncate mb-5">{skill.name}</h1>
      </div>
    </div>
  );
};

export default Skill;
