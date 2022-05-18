import MartIcon from '@images/mart.png';

const HomePage = () => (
    <div id='home' className='mx-24 flex flex-row justify-center items-center h-screen gap-10'>
        <img className='md:w-44 w-24 h-auto' src={MartIcon} alt='Mart' />
        <div className='md:whitespace-normal whitespace-nowrap'>
            <h1 className='md:text-5xl text-2xl'>Hi, I'm Mart.</h1>
            <p className='md:text-4xl text-xl'>A software developer.</p>
        </div>
    </div>
);

export default HomePage;