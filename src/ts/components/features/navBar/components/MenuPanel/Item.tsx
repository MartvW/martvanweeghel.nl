import { useNavigate } from 'react-router-dom';

type Props = {
    to: string,
    name: string,
    icon?: any,
    setIsMenuPanelOpen: (isMenuPanelOpen: boolean) => void,
};

const Item = ({ to, name, icon, setIsMenuPanelOpen }: Props) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(to);
        setIsMenuPanelOpen(false);
    };

    return (
        <div onClick={() => onClick()} className='flex flex-row gap-2 cursor-pointer text-black border-b-2 p-2 hover:bg-gray-300'>
            {icon}
            {name}
        </div>
    );
};

export default Item;