import { PagePath } from '@routes/appUrls';

type Props = {
    error: number,
    errorInfo?: string,
};

const ErrorPage = ({ error, errorInfo = 'Page not found' }: Props) => {
    const handleBackButton = () => {
        window.location.href = PagePath.home;
        window.location.reload();
    };

    return (
        <div>
            Error <p>{error}</p>
            <p>{errorInfo}</p>
            <button onClick={() => handleBackButton}></button>
        </div>
    );
};

export default ErrorPage;