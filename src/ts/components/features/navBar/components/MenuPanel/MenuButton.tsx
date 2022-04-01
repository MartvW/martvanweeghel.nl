import { AppContext } from '@components/features/appContext/AppContext';
import { useContext } from 'react';

const MenuButton = () => {
    const { isMenuPanelOpen, setIsMenuPanelOpen } = useContext(AppContext);

    return (
        <button onClick={() => setIsMenuPanelOpen(!isMenuPanelOpen)} className={`flex items-center justify-center ${isMenuPanelOpen ? 'text-black' : 'text-white'} bg-transparent border-none focus:outline-none`}>
            <svg className='h-9 w-9' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='18' x2='21' y2='18' />
            </svg>
        </button>
    );
};

export default MenuButton;