import MartIcon from '@images/mart.png';

const HomePage = () => (
    <div id='home' className='mx-24 flex flex-row justify-center items-center h-screen gap-10'>
        <img className='w-44 h-auto' src={MartIcon} alt='Mart' />
        <div>
            <h1 className='text-5xl'>Hi, I'm Mart.</h1>
            <p className='text-4xl'>A software developer.</p>
        </div>
    </div>
);

export default HomePage;