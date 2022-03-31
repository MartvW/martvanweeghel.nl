import ComingSoon from '@components/primitives/comingSoon/ComingSoon';
import Layout from '@components/primitives/layout/Layout';
import { Helmet } from 'react-helmet';

const ProjectsPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Mart van Weeghel - Projects</title>
            </Helmet>
            <ComingSoon />
        </Layout>
    );
};


export default ProjectsPage;