import Layout from '@components/primitives/layout/Layout';
import { Helmet } from 'react-helmet';

type Props = {
    error: number,
    errorInfo?: string,
};

const ErrorPage = ({ error, errorInfo = 'Page not found' }: Props) => (
    <Layout>
        <Helmet>
            <title>Mart van Weeghel - Error</title>
        </Helmet>
        <div className='absolute top-0 left-0 flex flex-col justify-center items-center h-full w-full'>
            <h1 className='text-white text-8xl font-bold'>{error}</h1>
            <h1 className='text-white text-3xl'>{errorInfo}</h1>
        </div>
    </Layout>
);

export default ErrorPage;