import Layout from '@components/primitives/layout/Layout';
import { ProjectType } from '../../../types/ProjectType';
import { Helmet } from 'react-helmet';
import Project from './components/Project';
import projects from '../../../utils/data/Projects';

const ProjectsPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Mart van Weeghel - Projects</title>
            </Helmet>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                        Check all my projects here
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project: ProjectType) => {
                        if (!project.isVisible) return null;
                        return (
                            <Project key={project.id} project={project} />
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
};


export default ProjectsPage;