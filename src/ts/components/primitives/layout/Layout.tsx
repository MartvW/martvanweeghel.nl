import { ReactChild, useState } from 'react';

type Props = {
    children?: ReactChild[] | ReactChild;
};

const Layout = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 100);

    return (
        <main className='absolute top-0 bottom-0 w-full h-full theme bg-primary'>
            <div className={`absolute top-0 left-0 ${isLoading ? 'opacity-100 ' : 'opacity-0'} w-full h-full bg-primary ease-in-out duration-700`}>
            </div>
            {children}
        </main>
    );
};

export default Layout;