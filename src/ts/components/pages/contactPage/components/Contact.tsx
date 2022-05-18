type Props = {
    src: any;
    alt: string;
    href?: string;
};

const Contact = ({ src, alt, href }: Props) => {
    const handleClick = () => {
        if (href) {
            window.open(href, '_blank');
        }
    };

    return (
        <div className='flex flex-col items-center gap-5 w-32 h-32 hover:scale-110 cursor-pointer ease-in-out duration-300'>
            <img onClick={() => handleClick()} title={alt} className='rounded-full' src={src} alt={alt} />
            <h1 className='text-xl font-thin'>{alt}</h1>
        </div>
    );
};

export default Contact;;