import Highlight from './components/Highlight';

const AboutPage = () => {
    const calculateAge = (date: any) => {
        const birthdate = new Date(date);
        let timeDiff = Math.abs(Date.now() - birthdate.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        return age;
    };

    return (
        <div className='my-24 h-screen w-full flex items-center py-24 px-24'>
            <div id='about' className='w-full h-full flex justify-center items-center flex-col gap-5'>
                <h1 className='text-5xl font-thin'>About</h1>
                <div className='mt-5 flex flex-col gap-5 items-center'>
                    <p className='text-xl'>Hey, I'm <Highlight color='orange'>Mart van Weeghel</Highlight> I am <Highlight color='blue'>{calculateAge('2004-04-30')} years old</Highlight> and currently living in <Highlight color='red'>The Netherlands</Highlight></p>
                    <p className='text-xl'>I started programming when I was about 14 years old and I started with JavaScript.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;