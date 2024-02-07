import ReactLoading from "react-loading";

type Props = {
  type?: any;
};

const Loading = ({ type = "spin" }: Props) => (
  <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full z-50 ">
    <ReactLoading color="lightblue" type={type} height={100} width={100} />
  </div>
);

export default Loading;
