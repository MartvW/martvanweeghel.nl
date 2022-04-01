import { ReactChild } from 'react';
import { Link } from 'react-router-dom';
import MartPNG from '@images/mart.png';
import MenuButton from '@components/features/navBar/components/MenuPanel/MenuButton';
import MenuPanel from '@components/features/navBar/components/MenuPanel/MenuPanel';
import NavItem from '@components/features/navBar/components/NavItem';
import { PagePath } from '@routes/appUrls';

type Props = {
    children?: ReactChild | ReactChild[];
};

const NavBar = ({ children }: Props) => {
    return (
        <>
            <nav className='fixed z-50 w-full top-0 left-0 flex items-center justify-between flex-wrap p-6 overflow-none'>
                <div className='flex items-center text-white mr-6 space-x-24'>
                    <Link to={PagePath.home} className='flex flex-row items-center gap-5'>
                        <img src={MartPNG} alt='logo' className='h-24 rounded-full' />
                        <p className='text-4xl hidden md:block'>Mart van Weeghel</p>
                    </Link>
                    <div className='absolute flex items-center gap-5 md:hidden right-5'>
                        <MenuButton />
                        <MenuPanel />
                    </div>
                    <div className='hidden md:flex items-center gap-10 text-white'>
                        <NavItem to={PagePath.home} name='Home' />
                        <NavItem to={PagePath.projects} name='Projects' />
                        <NavItem to={PagePath.about} name='About' />
                        <NavItem to={PagePath.contact} name='Contact' />
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
};

export default NavBar;