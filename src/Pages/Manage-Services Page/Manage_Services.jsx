import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Rating,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";

const Manage_Services = () => {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  return (
    <div className="w-full my-20">
      <h1 className="text-center text-4xl font-bold">Manage Your Services</h1>
      <div>
        <div className="my-6 lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:gap-10">
          <Card className="bg-[#]">
            <CardHeader floated={false} className="">
              <img
                src="https://ca-times.brightspotcdn.com/dims4/default/c987ae9/2147483647/strip/true/crop/2048x1363+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F51%2F61%2F56bc6796fb9f847b62a830e4a6db%2Fla-167754-me-0908-bikelane1-wjs-jpg-20150706"
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center text-[#164863] space-y-4">
              <h4 className="text-lg lg:text-2xl font-bold">City Commute</h4>
              <p className=" opacity-70 text-sm md:text-base">
                Shared rides for convenient daily commuting within the city.
              </p>
              <div className="px-2 lg:px-6 flex justify-between items-center gap-4">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D"
                    width={40}
                    className="rounded-full"
                    alt=""
                  />
                  <div>
                    <p className="font-bold text-sm lg:text-base">MH lehri</p>
                    <p className="opacity-70 text-xs text-left">You</p>
                  </div>
                </div>
                <Rating
                  unratedColor="blue"
                  ratedColor="blue"
                  readonly
                  value={4}
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between px-2 lg:px-6">
                <p className=" lg:text-xl">
                  <span className="font-bold">Price:</span>{" "}
                  <span className="text-[#0091ff]">$10</span>
                </p>
                <p>
                  <span className="font-bold lg:text-xl">Area:</span>{" "}
                  <span className="text-[#0091ff]">Savar, Dhaka</span>
                </p>
              </div>
              <div className="flex justify-evenly">
                <Button
                  onClick={() => handleOpen("md")}
                  className="bg-[#164863] text-[8px] lg:text-base mt-4"
                >
                  Edit
                </Button>

                <Button className="bg-[#164863] text-[8px] lg:text-base mt-4">
                  Remove
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <Dialog
        open={size === "md"}
        size={size || "md"}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-[#164863]">Edit Service</DialogHeader>
        <DialogBody>
          <form className="space-y-4">
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
              <span>Update</span>
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Manage_Services;
