import classNames from 'classnames';
import { ReactChild, useState } from 'react';

type Props = {
    children?: ReactChild[] | ReactChild;
};

const Layout = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 100);

    const className = classNames("absolute top-0 left-0  w-full h-full bg-primary ease-in-out duration-700", {
        'opacity-0 hidden': !isLoading,
        'opaity-100': isLoading,
    });

    return (
        <main className='absolute top-0 bottom-0 w-full h-full theme bg-primary'>
            <div className={className}>
            </div>
            {children}
        </main>
    );
};

export default Layout;