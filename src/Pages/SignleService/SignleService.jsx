import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Rating,
} from "@material-tailwind/react";

import { useState } from "react";

const SignleService = () => {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);
  return (
    <div className="my-20">
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="https://ca-times.brightspotcdn.com/dims4/default/c987ae9/2147483647/strip/true/crop/2048x1363+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F51%2F61%2F56bc6796fb9f847b62a830e4a6db%2Fla-167754-me-0908-bikelane1-wjs-jpg-20150706"
            alt="profile-picture"
          />
        </div>
        <div className="w-1/2 space-y-5">
          <h2 className="text-3xl font-semibold">City Commute</h2>
          <div className="mb-4 flex justify-between items-center gap-4">
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D"
                width={40}
                className="rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-sm lg:text-base">MH lehri</p>
                <p className="opacity-70 text-xs text-left">Seller</p>
              </div>
            </div>
            <Rating unratedColor="blue" ratedColor="blue" readonly value={4} />
          </div>
          <p className="mb-2 opacity-70 text-sm md:text-base">
            Shared rides for convenient daily commuting within the city.
          </p>
          <p className="text-xl">
            <span className="font-bold">Price:</span>
            <span className="text-[#0091ff]"> $10</span>
          </p>
          <Button
            className="bg-[#164863] w-full"
            onClick={() => handleOpen("md")}
          >
            Book Now
          </Button>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <h2 className="underline font-bold text-3xl mb-3 ">Seller Info</h2>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D"
          width={60}
          className="rounded-full"
          alt=""
        />
        <h3 className="text-2xl font-medium">
          <span className="font-bold">Name:</span> MH Lehri
        </h3>

        <p className="font-medium my-2">
          <span className="font-bold">Location:</span> Savar, Dhaka
        </p>
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
        <DialogHeader className="text-[#164863]">Confirm Purchase</DialogHeader>
        <DialogBody>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e.target.service.value);
            }}
          >
            <Input
              disabled
              type="text"
              name="service"
              value=""
              placeholder="Service Name"
            />
            <Input disabled type="text" placeholder="Service img" />
            <Input disabled type="text" placeholder="Service Provider email" />
            <Input disabled type="text" placeholder="User email" />
            <Input disabled type="Number" placeholder="Price" />
            <Input
              type="datetime-local"
              placeholder="Service Taking Date"
              className=" !border-[#164863] focus:!border-[#164863] "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Input
              type="text"
              placeholder="Special instruction"
              className=" !border-[#164863] focus:!border-[#164863] "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button
              type="submit"
              className="bg-[#164863] "
              onClick={handleOpen}
            >
              <span>Make Purchase</span>
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default SignleService;
