import { AppContext } from '@components/features/appContext/AppContext';
import { PagePath } from '@routes/appUrls';
import useOutsideAlerter from '@utils/useOutsideAlerter';
import { useContext, useRef } from 'react';
import Item from './Item';

const MenuPanel = () => {
    const { isMenuPanelOpen, setIsMenuPanelOpen } = useContext(AppContext);
    const menuPanelRef = useRef(null);

    useOutsideAlerter(menuPanelRef, setIsMenuPanelOpen, false);

    return (
        <div ref={menuPanelRef} className={`fixed top-0 right-0 bg-white shadow-lg w-3/5 h-full p-2 z-50 ease-in-out duration-300  ${isMenuPanelOpen ? "translate-x-0 " : "translate-x-full"}`}>
            <ul className='mt-12'>
                <Item to={PagePath.home} name='Home' setIsMenuPanelOpen={setIsMenuPanelOpen} />
                <Item to={PagePath.projects} name='Projects' setIsMenuPanelOpen={setIsMenuPanelOpen} />
                <Item to={PagePath.about} name='About' setIsMenuPanelOpen={setIsMenuPanelOpen} />
                <Item to={PagePath.contact} name='Contact' setIsMenuPanelOpen={setIsMenuPanelOpen} />
            </ul>
            <footer className='fixed bottom-5 w-full text-center'>
                <p className='text-xs text-gray-400'>© {new Date().getFullYear()} Mart van Weeghel</p>
            </footer>
        </div>

    );
};

export default MenuPanel;