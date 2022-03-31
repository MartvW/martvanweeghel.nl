import ComingSoon from '@components/primitives/comingSoon/ComingSoon';
import Layout from '@components/primitives/layout/Layout';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Mart van Weeghel - Home</title>
            </Helmet>
            <ComingSoon />
        </Layout>
    );
};


export default HomePage;