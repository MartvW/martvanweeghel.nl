import classNames from 'classnames';

type Props = {
    children: React.ReactNode[] | React.ReactNode;
    color: 'blue' | 'orange' | 'red' | 'yellow';
};

const Highlight = ({ children, color }: Props) => {
    const className = classNames('md:text-white md:font-normal font-bold md:p-1 p-0 rounded-lg md:border-4', {
        'md:bg-blue-500 md:border-blue-600 text-blue-500': color === 'blue',
        'md:bg-orange-500 md:border-orange-600 text-orange-500': color === 'orange',
        'md:bg-red-500 md:border-red-600 text-red-500': color === 'red',
        'md:bg-yellow-500 md:border-yellow-600 text-yellow-500': color === 'yellow',
    });

    return (
        <span className={className}>
            {children}
        </span>
    );
};

export default Highlight;