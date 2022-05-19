import { ProjectType } from '@ProjectType';

type Props = {
    project: ProjectType;
};

const Project = ({ project }: Props) => {
    const goToProject = () => {
        window.open(project.url, '_blank');
    };

    return (
        <div onClick={() => goToProject()} className="flex flex-wrap md:w-1/3 w-full" title={project.name}>
            <div className="relative w-full m-2 md:m-3 cursor-pointer">
                <img alt={project.name} className="block object-cover object-center w-full h-full rounded-lg"
                    src={project.photo} />
                <div className="absolute top-0 right-0 rounded-lg bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex flex-col items-center justify-center p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <h1 className='text-white font-bold uppercase text-1xl md:text-3xl max-w-full px-5 truncate'>{project.name}</h1>
                </div>
            </div>
            <h1 className='md:invisible visible text-center w-full'>{project.name}</h1>
        </div>
    );
};

export default Project;