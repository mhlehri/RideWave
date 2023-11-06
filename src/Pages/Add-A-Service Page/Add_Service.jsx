import { Button, Input, Textarea } from "@material-tailwind/react";

import Lottie from "lottie-react";
import create from "../../assets/kMjupQ85Vn.json";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Create = () => {
  return <Lottie style={{ margin: "auto" }} animationData={create} />;
};

const Add_Service = () => {
  useEffect(() => {
    document.title = "RideWave | Add Service";
  }, []);
  const { user } = useContext(AuthContext);
  const handleAdd = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const SName = e.target.SName.value;
    const PName = user.displayName;
    const PEmail = user.email;
    const PPhoto = user.photoURL;
    const area = e.target.area.value;
    const des = e.target.des.value;
    const userInfo = { photo, SName, PName, PEmail, PPhoto, area, des };
    console.log(userInfo);
  };

  return (
    <div className="my-24 mx-auto px-4">
      <h1 className="my-10 text-4xl text-center">Add Service</h1>
      <div
        className="flex 
      "
      >
        <div className="w-1/2">
          <Create></Create>
        </div>
        <form className="space-y-4 w-1/2" onSubmit={handleAdd}>
          <Input
            type="text"
            name="photo"
            placeholder="Image URL"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            type="text"
            name="SName"
            placeholder="Service Name"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            name="PName"
            type="text"
            readOnly
            value={`${user.displayName} (Your Name)`}
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            name="PEmail"
            type="text"
            readOnly
            value={`${user.email} (Your Email)`}
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            name="price"
            type="number"
            placeholder="price"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            name="area"
            type="text"
            placeholder="service area"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Textarea
            type="text"
            name="des"
            rows={4}
            placeholder="Service Description"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Button type="submit" className="bg-[#164863]">
            <span>Add Button</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Add_Service;
