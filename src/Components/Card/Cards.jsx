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
  return (
    <Card className="bg-[#]">
      <CardHeader floated={false} className="">
        <img
          src="https://ca-times.brightspotcdn.com/dims4/default/c987ae9/2147483647/strip/true/crop/2048x1363+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F51%2F61%2F56bc6796fb9f847b62a830e4a6db%2Fla-167754-me-0908-bikelane1-wjs-jpg-20150706"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center text-[#164863] space-y-4">
        <h4 className="text-lg lg:text-2xl font-bold">{serviceName}</h4>
        <p className=" opacity-70 text-sm md:text-base">{serviceDescription}</p>
        <div className="px-2 flex justify-between items-center gap-4">
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D"
              width={40}
              className="rounded-full"
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
        <Link to={`/services/${_id}`} className="">
          <Button className="bg-[#164863] text-[8px] lg:text-base mt-4">
            View Detail
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default Cards;
