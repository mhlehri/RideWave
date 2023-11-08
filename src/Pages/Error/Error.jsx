import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-12 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl dark:text-white">404</h1>

      <p className="text-3xl dark:text-white">Page Not Found...</p>
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
