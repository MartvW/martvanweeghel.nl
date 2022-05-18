import AlertBox from '@components/primitives/alertBox/AlertBox';
import useFetchProjects from '@hooks/projects/useFetchProjects';
import { useEffect, useState } from 'react';
import { ProjectType } from '../../../types/ProjectType';
import Project from './components/Project';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const { data } = useFetchProjects();

    useEffect(() => {
        if (!data) return;
        // eslint-disable-next-line array-callback-return
        data?.map((project: ProjectType) => {
            if (project.isVisible) {
                setProjects((projects: ProjectType[]) => [...projects, project]);
            }
        });
    }, [data]);

    return (
        <div className='my-24 h-screen w-full flex items-center py-24 px-24 '>
            <div id='projects' className='w-full h-full flex justify-center items-center flex-col gap-5'>
                <h1 className='text-5xl font-thin'>Projects</h1>
                <div className="container px-10 py-10 w-3/4">
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