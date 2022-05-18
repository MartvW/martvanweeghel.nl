import isInViewport from '@utils/isInViewport';
import { useEffect, useState } from 'react';
import Button from './component/Button';

const ScrollButtons = () => {
    const [projectVisible, setProjectVisible] = useState(false);
    const [homeVisible, setHomeVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {
        setActiveButton();
    }, []);

    const setActiveButton = () => {
        setProjectVisible(isInViewport('projects'));
        setHomeVisible(isInViewport('home'));
        setAboutVisible(isInViewport('about'));
        setContactVisible(isInViewport('contact'));
        setHomeVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', setActiveButton);

    return (
        <div className='fixed top-0 right-5 w-1/12 flex justify-center items-end h-full flex-col gap-1'>
            <Button name='Home' setIsActive={setHomeVisible} isActive={homeVisible} elementId='home' />
            <Button name='Projects' setIsActive={setProjectVisible} isActive={projectVisible} elementId='projects' />
            <Button name='About' setIsActive={setAboutVisible} isActive={aboutVisible} elementId='about' />
            <Button name='Contact' setIsActive={setContactVisible} isActive={contactVisible} elementId='contact' />
        </div>
    );
};

export default ScrollButtons;