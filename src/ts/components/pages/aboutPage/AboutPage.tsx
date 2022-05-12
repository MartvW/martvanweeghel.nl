import ComingSoon from '@components/primitives/comingSoon/ComingSoon';
import Layout from '@components/primitives/layout/Layout';
import { Helmet } from 'react-helmet';

const AboutPage = () => (
    <Layout>
        <Helmet>
            <title>Mart van Weeghel - About</title>
        </Helmet>
        <ComingSoon />
    </Layout>
);


export default AboutPage;