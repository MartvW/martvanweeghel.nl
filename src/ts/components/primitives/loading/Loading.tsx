import ReactLoading from 'react-loading';

type Props = {
    type?: any;
};

const Loading = ({ type = 'spin' }: Props) => {
    return (
        <div className="relative flex justify-center items-center h-full">
            <ReactLoading
                color='lightblue'
                type={type}
                height={100}
                width={100}
            />
        </div>
    );
};

export default Loading;