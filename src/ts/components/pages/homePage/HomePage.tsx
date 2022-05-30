import MartIcon from '@images/mart.png';

const HomePage = () => (
    <div id='home' className='mx-24 flex flex-row justify-center items-center h-screen gap-10'>
        <img className='md:w-44 w-24 h-auto' src={MartIcon} alt='Mart' />
        <div className='md:whitespace-normal whitespace-nowrap text-left'>
            <h1 className='md:text-5xl text-2xl'>Hi, I'm Mart.</h1>
            <p className='md:text-4xl text-xl'>A software developer.</p>
            <a href='https://music.martvanweeghel.nl' className='cursor-pointer ease-in-out duration-300 hover:border-b-2 hover:border-blue-500 md:text-2xl text-md text-gray-400 font-thin'>A musician.</a>
        </div>
    </div>
);

export default HomePage;