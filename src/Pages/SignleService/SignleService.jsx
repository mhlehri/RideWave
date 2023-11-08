import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Rating,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "./../../Components/Skeleton/Skeleton";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Cards from "../../Components/Card/Cards";

const SignleService = () => {
  const { id } = useParams();
  console.log(id);
  const currentDate = new Date();

  const nextDayDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  const nextDayDateValue = nextDayDate.toISOString().split("T")[0];

  const maxDate = new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000);
  const maxDateValue = maxDate.toISOString().split("T")[0];

  const { data: single, isLoading } = useQuery({
    queryFn: async () => {
      return await axios
        .get(`https://server-nu-umber.vercel.app/details/${id}`)
        .then((response) => {
          return response.data;
        });
    },
    queryKey: ["singleServices", id],
  });

  const { data: anothers, isPending } = useQuery({
    queryFn: async () => {
      return await axios
        .get(
          `https://server-nu-umber.vercel.app/another?email=${single.providerEmail}&name=${single.serviceName}`
        )
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
    },
    queryKey: ["anotherServices", single?.providerEmail],
    enabled: !!single,
  });
  // const {
  //   _id,
  //   providerEmail,
  //   providerImage,
  //   providerName,
  //   serviceArea,
  //   serviceDescription,
  //   serviceImage,
  //   serviceName,
  //   servicePrice,
  // } = single;
  const { user } = useContext(AuthContext);
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  useEffect(() => {
    document.title = "RideWave | Service Details";
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const location = e.target.location.value;
    const serviceImage = single.serviceImage;
    const serviceName = single.serviceName;
    const userEmail = user.email;
    const providerEmail = single.providerEmail;
    const servicePrice = single.servicePrice;
    const booking = {
      serviceImage,
      serviceName,
      providerEmail,
      userEmail,
      servicePrice,
      date,
      location,
      status: "pending",
    };
    axios
      .post("https://server-nu-umber.vercel.app/addbookings", booking)
      .then((response) => {
        if (response) {
          handleOpen();
        }
        if (response.data.insertedId) {
          Swal.fire({
            title: "Successfully inserted!",
            color: "#164863",
            iconColor: "#164863",
            background: "#ddf2fd",
            confirmButtonColor: "#164863",
            text: "Your booking has been added.",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    // console.log("booking", booking);
  };
  return (
    <div className="mb-20">
      <div>
        {isLoading ? (
          <div className="my-20">
            <div role="status" className="animate-pulse my-12">
              <div className="flex flex-col items-center justify-center mt-4">
                <svg
                  className="w-16 h-16 text-gray-200  mb-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24 mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 w-28"></div>
              <span className="sr-only">Loading...</span>
            </div>

            <div
              role="status"
              className="p-4 gap-12 flex border bg-[#9BBEC8] border-[#9BBEC8] rounded shadow animate-pulse md:p-6"
            >
              <div className="w-1/2 flex items-center justify-center h-48 mb-4 bg-gray-300 rounded">
                <svg
                  className="w-10 h-10 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="w-1/2">
                <div className="h-5 bg-gray-200 rounded-full  w-48 mb-4 mx-auto"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full "></div>
                <div className="flex items-center mt-4 space-x-3">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                    <div className="w-24 h-2 bg-gray-200 rounded-full "></div>
                  </div>
                  <Rating
                    unratedColor="gray"
                    ratedColor="gray"
                    readonly
                    value={4}
                  />
                </div>
                <div className="my-2.5 flex justify-between">
                  <div className="w-24 h-3 bg-gray-200 rounded-full "></div>
                  <div className="w-24 h-3 bg-gray-200 rounded-full "></div>
                </div>
                <div>
                  <div className="bg-gray-200 mx-auto rounded-lg h-8"></div>
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="my-20">
            <div className="my-20 flex flex-col items-center">
              <img
                src={single.providerImage}
                className="w-16 h-16 object-cover object-top rounded-full"
                alt=""
              />
              <h3 className="text-2xl font-medium">
                <span className="font-bold">Name:</span> {single.providerName}
              </h3>

              <p className="font-medium my-2">
                <span className="font-bold">Location:</span>{" "}
                {single.serviceArea}
              </p>
            </div>
            <div className="flex gap-10">
              <div className="w-1/2 border-2 pt-3  pe-4 border-[#164863] ">
                <img
                  src={single.serviceImage}
                  alt="profile-picture"
                  className="  scale-105 "
                />
              </div>
              <div className="w-1/2 space-y-5">
                <h2 className="text-3xl font-semibold">{single.serviceName}</h2>
                <div className="mb-4 flex justify-between items-center gap-4">
                  <div className="flex gap-4">
                    <img
                      src={single.providerImage}
                      className="w-10 h-10 object-cover object-top rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="font-bold text-sm lg:text-base">
                        {single.providerName}
                      </p>
                      <p className="opacity-70 text-xs text-left">Seller</p>
                    </div>
                  </div>
                  <Rating
                    unratedColor="blue"
                    ratedColor="blue"
                    readonly
                    value={4}
                  />
                </div>
                <p className="mb-2 opacity-70 text-sm md:text-base">
                  {single.serviceDescription}
                </p>
                <p className="text-xl">
                  <span className="font-bold">Price:</span>
                  <span className="text-[#0091ff]"> {single.servicePrice}</span>
                </p>
                <Button
                  className="bg-[#164863] w-full"
                  onClick={() => handleOpen("md")}
                >
                  Book Now
                </Button>
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
              className="bg-[#bce8ff]"
            >
              <DialogHeader className="text-[#164863]">
                Confirm Purchase
              </DialogHeader>
              <DialogBody>
                <form className="space-y-4" onSubmit={handleAdd}>
                  <Input
                    disabled
                    type="text"
                    name="service"
                    className=""
                    value={single.serviceName}
                  />
                  <Input disabled type="text" value={single.serviceImage} />
                  <Input
                    disabled
                    type="text"
                    value={`${single.providerEmail} (Seller's)`}
                  />
                  <Input disabled type="text" value={`${user.email} (Your)`} />
                  <Input
                    disabled
                    type="text"
                    value={`${single.servicePrice} ($Price)`}
                  />
                  <Input
                    type="date"
                    required
                    min={nextDayDateValue}
                    max={maxDateValue}
                    name="date"
                    className=" !border-[#164863] focus:!border-[#164863] "
                    variant="static"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                  <Input
                    required
                    variant="static"
                    type="text"
                    name="location"
                    placeholder="Your Location"
                    className=" !border-[#164863] focus:!border-[#164863] "
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                  <Button type="submit" className="bg-[#164863] mr-3 ">
                    <span>Make Purchase</span>
                  </Button>
                  <Button className="bg-orange-900 " onClick={handleOpen}>
                    <span>Cancel</span>
                  </Button>
                </form>
              </DialogBody>
            </Dialog>
          </div>
        )}
      </div>
      {!isPending ? (
        <div className="my-20">
          <h1
            className={`my-5 font-bold lg:text-2xl ${
              anothers.length ? "" : "hidden"
            }`}
          >
            More Services from this seller
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {anothers.map((x, i) => (
              <div key={i}>
                <Cards service={x}></Cards>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Skeleton></Skeleton>
      )}
    </div>
  );
};

export default SignleService;
