type Props = {
    error: any;
    errorInfo: any;
};

const ErrorPage = ({ error, errorInfo }: Props) => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            <h1 className='text-5xl'>{error}</h1>
            <h1 className='text-2xl font-thin text-center'>{errorInfo}</h1>
        </div>
    );
};

export default ErrorPage;