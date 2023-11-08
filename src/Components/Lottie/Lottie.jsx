import Lottie from "lottie-react";

import hello from "../../assets/xGjdeAdNU0.json";
import lo from "../../assets/Animation.json";
import loading from "../../assets/loading.json";
import FAQ from "../../assets/car1.json";
import app from "../../assets/Animation - 1699216024327.json";
import addProduct from "../../assets/kMjupQ85Vn.json";
import dataComing from "../../assets/dataComing.json";
import hi from "../../assets/Hi.json";
import notA from "../../assets/Not.json";

export const Add = () => {
  return <Lottie style={{ margin: "auto" }} animationData={addProduct} />;
};
export const Not = () => {
  return (
    <Lottie style={{ margin: "auto", width: "200px" }} animationData={notA} />
  );
};
export const DataComing = () => {
  return (
    <Lottie
      style={{ width: "150px", margin: "auto" }}
      animationData={dataComing}
    />
  );
};

export const Hi = () => {
  return <Lottie style={{ margin: "auto" }} animationData={hi} />;
};
export const LoadingData = () => {
  return (
    <Lottie
      style={{ width: "400px", margin: "auto", height: "100vh" }}
      animationData={dataComing}
    />
  );
};

export const App = () => {
  return <Lottie style={{ margin: "auto" }} animationData={app} />;
};

export const Faq = () => {
  return <Lottie style={{ margin: "auto" }} animationData={FAQ} />;
};

export const Hello = () => {
  return <Lottie style={{}} animationData={hello} />;
};
export const Update = () => {
  return <Lottie style={{ margin: "auto" }} animationData={hi} />;
};
export const Lo = () => {
  return <Lottie style={{}} animationData={dataComing} />;
};
