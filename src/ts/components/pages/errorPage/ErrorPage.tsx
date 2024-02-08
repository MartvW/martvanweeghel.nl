import MartIcon from "@images/mart.png";

type Props = {
  error: any;
  errorInfo: any;
};

const ErrorPage = ({ error, errorInfo }: Props) => {
  if (process.env.NODE_ENV !== "development") {
    error = "Oops!";
    errorInfo = "Something went wrong, please try again later!";
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 h-screen w-full px-24">
      <img className="md:w-44 w-36 h-auto" src={MartIcon} alt="Mart" />
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl md:text-5xl ">{error}</h1>
        <h1 className="text-1xl md:text-2xl font-thin">{errorInfo}</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
