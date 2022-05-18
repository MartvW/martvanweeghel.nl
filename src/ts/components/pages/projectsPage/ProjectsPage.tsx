import AlertBox from '@components/primitives/alertBox/AlertBox';
import useFetchProjects from '@hooks/projects/useFetchProjects';
import { ProjectType } from '../../../types/ProjectType';
import Project from './components/Project';

const ProjectsPage = () => {
    const { projects } = useFetchProjects();

    return (
        <div className='my-24 md:h-screen h-fit w-full flex justify-center items-center py-24 px-24'>
            <div id='projects' className='w-full h-full flex justify-center items-center flex-col gap-5'>
                <h1 className='text-5xl mt-24 font-thin'>Projects</h1>
                <div className="container md:px-10 md:py-10 md:w-3/4">
                    <div className="flex flex-wrap">
                        {projects
                            ? projects?.length > 0
                                ? projects?.map((project: ProjectType) => {
                                    if (!project.isVisible) return <></>;
                                    return (
                                        <Project
                                            key={project.id}
                                            project={project}
                                        />
                                    );
                                })
                                : <AlertBox
                                    color='orange'
                                    message='No projects found'
                                />
                            : <AlertBox
                                color='red'
                                message='Something went wrong. Please try again later.'
                            />
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectsPage;