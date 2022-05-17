import isInViewport from '@utils/isInViewport';
import { useState } from 'react';
import Button from './component/Button';

const ScrollButtons = () => {
    const [projectVisible, setProjectVisible] = useState(false);
    const [homeVisible, setHomeVisible] = useState(false);

    const setActiveButton = () => {
        setProjectVisible(isInViewport('projects'));
        setHomeVisible(isInViewport('home'));
        setHomeVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', setActiveButton);

    return (
        <div className='fixed top-0 right-5 w-1/12 flex justify-center items-end h-full flex-col gap-1'>
            <Button name='Home' isActive={homeVisible} elementId='home' />
            <Button name='Projects' isActive={projectVisible} elementId='projects' />
        </div>
    );
};

export default ScrollButtons;