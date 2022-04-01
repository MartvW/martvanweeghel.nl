import { AppContext } from '@components/features/appContext/AppContext';
import Loading from '@components/primitives/loading/Loading';
import { ReactChild, useContext, useState } from 'react';

type Props = {
    children?: ReactChild[] | ReactChild;
};

const Layout = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const { isMenuPanelOpen } = useContext(AppContext);


    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    return (
        <>
            {isMenuPanelOpen || isLoading
                ? <div className='bg-black/50 w-full h-full fixed top-0 left-0 z-40'></div>
                : null
            }
            <main className='absolute top-0 bottom-0 w-full h-full pt-44 pb-4 pl-12 pr-12'>
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