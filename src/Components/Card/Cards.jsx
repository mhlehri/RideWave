import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Rating,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ service }) => {
  const {
    _id,
    providerImage,
    providerName,
    serviceArea,
    serviceDescription,
    serviceImage,
    serviceName,
    servicePrice,
  } = service;
  console.log(_id);
  return (
    <Card className="bg-[#]">
      <CardHeader floated={false} className=" lg:h-56">
        <img src={serviceImage} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center text-[#164863] space-y-4">
        <h4 className="text-lg lg:text-2xl font-bold">{serviceName}</h4>
        <p className=" opacity-70 text-sm md:text-base">{serviceDescription}</p>
        <div className="px-2 flex flex-wrap  justify-center md:justify-between items-center gap-4">
          <div className="flex gap-4">
            <img
              src={providerImage}
              className="w-[40px] h-[40px] object-cover object-top rounded-full"
              alt=""
            />
            <div>
              <p className="font-bold text-sm lg:text-base">{providerName}</p>
              <p className="opacity-70 text-xs text-left">Seller</p>
            </div>
          </div>
          <Rating unratedColor="blue" ratedColor="blue" readonly value={4} />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-between px-2">
          <p className=" lg:text-xl">
            <span className="font-bold">Price:</span>{" "}
            <span className="text-[#0091ff]">{servicePrice}</span>
          </p>
          <p>
            <span className="font-bold lg:text-xl">Area:</span>{" "}
            <span className="text-[#0091ff]">{serviceArea}</span>
          </p>
        </div>
        <Link to={`/ass/${_id}`}>
          <Button className="bg-[#164863] text-[8px] lg:text-base mt-4">
            View Detail
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default Cards;
