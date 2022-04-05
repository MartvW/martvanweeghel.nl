import { ProjectType } from '../../../../types/ProjectType';
import { ReactComponent as JustDoItSVG } from '@images/justdoit.svg';
import MinecraftPNG from '@images/minecraft.png';

type Props = {
    project: ProjectType;
};

const Project = ({ project }: Props) => {
    const { name, description, photo, url } = project;

    const onClick = () => {
        window.open(url, '_blank');
    };

    return (
        <div onClick={() => onClick()} className="h-fit cursor-pointer shadow-xl hover:bg-gray-300 text-gray-600 hover:border-8 ease-in-out duration-300 w-full bg-white border rounded-lg overflow-hidden flex flex-col justify-center items-center p-0">
            {(photo === 'justdoit.svg')
                ? <JustDoItSVG />
                : (photo === 'minecraft.png')
                    ? <img className="object-center object-cover w-full lg:h-96 " src={MinecraftPNG} alt='Project' />
                    : <img className="object-center object-cover w-full lg:h-96" src={photo} alt="Project" />
            }
            <div className="text-center py-8 sm:py-6 h-full whitespace-pre-wrap">
                <p className="text-xl text-black font-bold mb-2">{name}</p>
                <p className="text-base font-normal mx-5">{description}</p>
                <p className='text-sm mt-2'>{url}</p>
            </div>
        </div>
    );
};

export default Project;