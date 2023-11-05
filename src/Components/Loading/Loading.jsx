import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

const Example = () => {
  return (
    <Lottie
      style={{ width: "400px", margin: "auto", height: "100vh" }}
      animationData={loading}
    />
  );
};

export default Example;
