import Loading from '@components/primitives/loading/Loading';
import { ReactChild, useState } from 'react';

type Props = {
    children?: ReactChild[] | ReactChild;
};

const Layout = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 500);

    return (
        <main className='absolute top-0 bottom-0 w-full h-full theme bg-primary'>
            <div className={`${isLoading ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}>
                <Loading />
            </div>
            <div className={`absolute top-0 left-0 ${isLoading ? 'opacity-100' : 'opacity-0'} w-full h-full bg-primary ease-in-out duration-500`}>
            </div>
            {children}
        </main>
    );
};

export default Layout;