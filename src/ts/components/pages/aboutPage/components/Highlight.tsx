import classNames from 'classnames';

type Props = {
    children: React.ReactNode[] | React.ReactNode;
    color: 'blue' | 'orange' | 'red';
};

const Highlight = ({ children, color }: Props) => {
    const className = classNames('md:text-white md:font-normal font-bold md:p-1 p-0 rounded-lg md:border-4', {
        'md:bg-blue-500 md:border-blue-800 text-blue-500': color === 'blue',
        'md:bg-orange-500 md:border-orange-800 text-orange-500': color === 'orange',
        'md:bg-red-500 md:border-red-800 text-red-500': color === 'red',
    });

    return (
        <span className={className}>
            {children}
        </span>
    );
};

export default Highlight;