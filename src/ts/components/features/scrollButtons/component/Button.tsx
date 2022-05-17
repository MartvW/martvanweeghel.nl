type Props = {
    name: string;
    isActive: boolean;
    elementId: string;
};

const Button = ({ name, isActive, elementId }: Props) => {
    const scrollSmoothToElement = () => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <button onClick={() => scrollSmoothToElement()} className={` bg-blue-500 h-12 hover:bg-blue-600 float-right w-24 ${isActive ? 'w-36 bg-blue-700' : ''} text-white rounded-lg p-2 ease-in-out duration-500`}>
            {name}
        </button>
    );
};

export default Button;