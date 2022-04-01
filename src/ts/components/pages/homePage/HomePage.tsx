import Layout from '@components/primitives/layout/Layout';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Mart van Weeghel - Home</title>
            </Helmet>


            <div className="flex flex-col items-center justify-start selection:h-full w-full gap-2">
                <div className='flex flex-col rounded-xl '>
                    <span className="text-7xl -mx-12 shadow-xl h-full w-full rounded-b-none mix-blend-screen p-5 rounded-lg bg-white">
                        My name is
                    </span>
                    <span className='text-7xl mx-12 shadow-xl h-full w-full rounded-t-none mix-blend-screen font-bold rounded-lg p-5 bg-white'>Mart van Weeghel</span>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;