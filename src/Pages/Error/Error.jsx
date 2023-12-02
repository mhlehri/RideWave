import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { ErrorP } from "../../Components/Lottie/Lottie";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[80vh] flex flex-col items-center w-screen ">
      <div className="max-w-[600px]">
        <ErrorP></ErrorP>
      </div>
      <Button
        className="bg-[#164863]"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back to Home
      </Button>
    </div>
  );
};

export default Error;
