import { SkillType } from '@SkillType';

type Props = {
    skill: SkillType;
};

const Skill = ({ skill }: Props) => {
    return (
        <div className='w-1/5 h-full flex flex-row gap-5 '>
            <div className='flex items-center gap-5 flex-row'>
                <img src={skill.icon} alt={skill.name} className='h-8 w-8' />
                <h1 className='md:visible invisible text-black truncate'>{skill.name}</h1>
            </div>
        </div>
    );
};

export default Skill;