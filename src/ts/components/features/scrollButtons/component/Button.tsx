import classNames from 'classnames';

type Props = {
    name: string;
    setIsActive: any;
    isActive: boolean;
    elementId: string;
};

const Button = ({ name, isActive, setIsActive, elementId }: Props) => {
    const scrollSmoothToElement = () => {
        const element = document.getElementById(elementId);
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        });

        setTimeout(() => {
            setIsActive(true);
        }, 10);
    };

    const className = classNames('md:text-right md:float-right md:w-24 w-16 md:text-md text-sm bg-primary rounded-lg p-2 ease-in-out duration-500', {
        'md:w-36 bg-blue-500 text-white': isActive,
        'text-black': !isActive,
    });

    return (
        <button onClick={() => scrollSmoothToElement()} className={className}>
            {name}
        </button>
    );
};

export default Button;