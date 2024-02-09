import classNames from "classnames";

type Props = {
  Icon: any;
  setIsActive: any;
  isActive: boolean;
  elementId: string;
};

const Button = ({ isActive, Icon, setIsActive, elementId }: Props) => {
  const scrollSmoothToElement = () => {
    setIsActive(true);

    const element = document.getElementById(elementId);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  const buttonClassName = classNames(
    "md:text-right md:float-right md:w-24 w-12 h-12 md:text-md text-sm md:rounded-lg md:p-2 p-0 ease-in-out duration-500 flex flex-col gap-2 items-center justify-center cursor-pointer hover:scale-125"
  );

  const underLineClassName = classNames(
    "float-left w-full h-1 bg-blue-500 ease-in-out duration-500",
    {
      "w-full": isActive,
      "w-0": !isActive,
    }
  );

  return (
    <button onClick={() => scrollSmoothToElement()} className={buttonClassName}>
      <Icon className="h-full " />
      <span className={underLineClassName}></span>
    </button>
  );
};

export default Button;
