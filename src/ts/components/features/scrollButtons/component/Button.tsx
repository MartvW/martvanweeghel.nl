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

    return (
        <button onClick={() => scrollSmoothToElement()} className={`text-right float-right w-24 ${isActive ? 'w-36 bg-blue-500 text-white' : 'text-black'} rounded-lg p-2 ease-in-out duration-500`}>
            {name}
        </button>
    );
};

export default Button;