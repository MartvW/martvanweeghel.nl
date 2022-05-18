import classNames from 'classnames';

type Props = {
    children: React.ReactNode[] | React.ReactNode;
    color: 'blue' | 'orange' | 'red';
};

const Highlight = ({ children, color }: Props) => {
    const className = classNames('text-white p-1 rounded-lg border-4', {
        'bg-blue-500': color === 'blue',
        'border-blue-800': color === 'blue',
        'bg-orange-500': color === 'orange',
        'border-orange-800': color === 'orange',
        'bg-red-500': color === 'red',
        'border-red-800': color === 'red',
    });

    return (
        <span className={className}>
            {children}
        </span>
    );
};

export default Highlight;