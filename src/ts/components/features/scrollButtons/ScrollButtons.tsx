import isInViewport from '@utils/isInViewport';
import { useEffect, useState } from 'react';
import Button from './component/Button';

const ScrollButtons = () => {
    const [projectVisible, setProjectVisible] = useState(false);
    const [homeVisible, setHomeVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [skillsVisible, setSkillsVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {
        setActiveButton();
    }, []);

    const setActiveButton = () => {
        setProjectVisible(isInViewport('projects'));
        setHomeVisible(isInViewport('home'));
        setAboutVisible(isInViewport('about'));
        setContactVisible(isInViewport('contact'));
        setSkillsVisible(isInViewport('skills'));
        setHomeVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', setActiveButton);

    return (
        <div className='fixed md:top-0 bottom-5 md:right-5 right-0 md:w-1/12 w-full flex justify-center items-end h-full md:flex-col flex-row md:gap-1 gap-5 md:m-0 '>
            <Button name='Home' setIsActive={setHomeVisible} isActive={homeVisible} elementId='home' />
            <Button name='About' setIsActive={setAboutVisible} isActive={aboutVisible} elementId='about' />
            <Button name='Projects' setIsActive={setProjectVisible} isActive={projectVisible} elementId='projects' />
            <Button name='Skills' setIsActive={setSkillsVisible} isActive={skillsVisible} elementId='skills' />
            <Button name='Contact' setIsActive={setContactVisible} isActive={contactVisible} elementId='contact' />
        </div>
    );
};

export default ScrollButtons;