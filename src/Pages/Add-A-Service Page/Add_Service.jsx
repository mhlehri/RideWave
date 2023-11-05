import { Button, Input, Textarea } from "@material-tailwind/react";

import Lottie from "lottie-react";
import create from "../../assets/kMjupQ85Vn.json";

const Create = () => {
  return <Lottie style={{ margin: "auto" }} animationData={create} />;
};

const createService = () => {
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
        <form className="space-y-4 w-1/2">
          <Input
            type="text"
            placeholder="Service url"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            type="text"
            placeholder="service name"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            type="text"
            placeholder="your name"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            type="text"
            placeholder="your email"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            type="number"
            placeholder="price"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            type="text"
            placeholder="service area"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Textarea
            type="text"
            rows={4}
            placeholder="service area"
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

export default createService;
