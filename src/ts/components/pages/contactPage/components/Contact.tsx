type Props = {
    src: any;
    alt: string;
    href?: string;
};

const Contact = ({ src, alt, href }: Props) => (
    <a href={href} className='flex flex-col items-center gap-5 md:w-32 md:h-32 w-12 h-12 hover:scale-110 cursor-pointer ease-in-out duration-300'>
        <img title={alt} className='rounded-full w-full h-full' src={src} alt={alt} />
        <h1 className='text-xl font-thin'>{alt}</h1>
    </a>
);

export default Contact;;