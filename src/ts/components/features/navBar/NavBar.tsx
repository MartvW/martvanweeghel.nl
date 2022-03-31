import { Link } from 'react-router-dom';
import MartPNG from '@images/mart.png';
import NavItem from './components/NavItem';
import { PagePath } from '@routes/appUrls';

const NavBar = () => {
    return (
        <nav className='fixed z-50 w-full top-0 left-0 flex items-center justify-between flex-wrap p-6'>
            <div className='flex items-center text-white mr-6 space-x-24'>
                <Link to='/' className='flex items-center gap-5'>
                    <img src={MartPNG} alt='logo' className='h-24 rounded-full' />
                    <h1 className='text-white font-bold text-3xl'>Mart van Weeghel</h1>
                </Link>
                <div className='flex items-center gap-10 text-white'>
                    <NavItem to={PagePath.home} name={'Home'} />
                    <NavItem to={PagePath.projects} name={'Projects'} />
                    <NavItem to={PagePath.about} name={'About'} />
                    <NavItem to={PagePath.contact} name={'Contact'} />
                </div>
            </div>
        </nav >
    );
};

export default NavBar;