import { ProjectType } from '../../../../types/ProjectType';

type Props = {
    project: ProjectType;
};

const Project = ({ project }: Props) => {
    const goToProject = () => {
        window.open(project.url, '_blank');
    };
    return (
        <div onClick={() => goToProject()} className="flex flex-wrap w-full md:w-1/3" title={project.name}>
            <div className="relative w-full m-2  md:m-3 cursor-pointer">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={project.photo} />
                <div className="absolute top-0 right-0 rounded-lg bottom-0 left-0 w-full h-full overflow-hidden bg-fixed md:opacity-0 opacity-50 hover:opacity-100 transition duration-300 ease-in-out flex flex-col items-center justify-center p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <h1 className='text-white font-bold uppercase text-1xl md:text-3xl max-w-full px-5 truncate'>{project.name}</h1>
                    <h1 className='text-white text-md md:text-1xl font-thin uppercase italic text-center'>{project.description}</h1>
                </div>
            </div>
        </div>
    );
};

export default Project;