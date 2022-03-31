import NavBar from '@components/features/navBar/NavBar';
import { ReactChild, useState } from "react";
import Loading from '../loading/Loading';

type Props = {
    children?: ReactChild[] | ReactChild;
};

const Layout = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 500);

    return (
        <>
            <NavBar />
            <main className='absolute w-full h-full pt-40 pb-4 pl-12 pr-12'>
                {
                    isLoading
                        ? <Loading />
                        : children
                }
            </main>
        </>
    );
};

export default Layout;