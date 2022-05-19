import { SkillType } from '@SkillType';
import classNames from 'classnames';

type Props = {
    skill: SkillType;
};

const Slider = ({ skill }: Props) => {
    const className = classNames('bg-red-500 h-full border-4 border-red-600 absolute rounded-bl-xl rounded-tl-xl', {
        'rounded-br-xl rounded-tr-xl': skill.percentage === 100,
        'rounded-br-md rounded-tr-md': skill.percentage === 99,
    });

    return (
        <div className='relative md:w-3/4 w-full md:h-8 h-5'>
            <span className='bg-gray-200 border-4 border-gray-300 w-full h-full absolute rounded-xl'></span>
            <span className={className} style={{ width: `${skill.percentage}%` }}></span>
        </div>
    );
};

export default Slider;