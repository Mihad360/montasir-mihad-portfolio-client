import { ClipLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="white" />
    </div>
  );
};

export default Loading;
