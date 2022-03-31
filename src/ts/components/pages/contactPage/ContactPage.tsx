import ComingSoon from '@components/primitives/comingSoon/ComingSoon';
import Layout from '@components/primitives/layout/Layout';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Mart van Weeghel - Contact</title>
            </Helmet>
            <ComingSoon />
        </Layout>
    );
};


export default ContactPage;