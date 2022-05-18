import InstagramPNG from '@images/instagram.png';
import LinkedinPNG from '@images/linkedin.png';
import MailPNG from '@images/mail.png';
import Contact from './components/Contact';

const ContactPage = () => (
    <div className='my-24 h-screen w-full flex items-center py-24 px-24'>
        <div id='contact' className='w-full h-full flex justify-center items-center flex-col gap-5'>
            <h1 className='text-5xl font-thin'>Contact</h1>
            <div className='container px-10 py-10 w-3/4'>
                <div className="flex justify-evenly">
                    <Contact src={InstagramPNG} alt='Instagram' href='https://www.instagram.com/martvanweeghel/' />
                    <Contact src={LinkedinPNG} alt='Linkedin' href='https://www.linkedin.com/in/martvanweeghel/' />
                    <Contact src={MailPNG} alt='Mail' href='mailto:mart@martvanweeghel.nl' />
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;
