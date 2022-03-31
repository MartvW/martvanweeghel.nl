import Loading from '@components/primitives/loading/Loading';
import { ReactChild, useState } from 'react';

type Props = {
    children?: ReactChild[] | ReactChild;
};

const Layout = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    return (
        <>
            <main className='absolute top-0 bottom-0 w-full h-full pt-44 pb-4 pl-12 pr-12 overflow-hidden'>
                {isLoading
                    ? <Loading />
                    : null
                }
                {children}
            </main>
        </>
    );
};

export default Layout;