import { useNavigate } from 'react-router-dom';

type Props = {
    to: string,
    name: string,
    setIsMenuPanelOpen: (isMenuPanelOpen: boolean) => void,
};

const Item = ({ to, name, setIsMenuPanelOpen }: Props) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(to);
        setIsMenuPanelOpen(false);
    };

    return (
        <div onClick={() => onClick()} className='cursor-pointer text-black border-b-2 p-2 hover:bg-gray-300'>
            {name}
        </div>
    );
};

export default Item;