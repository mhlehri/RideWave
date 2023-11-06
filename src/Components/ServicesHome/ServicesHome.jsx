import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Rating,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Cards from "../Card/Cards";
import { Skeleton } from "../Skeleton/Skeleton";

export function ServicesHome() {
  const { data: services, isPending } = useQuery({
    queryFn: async () => {
      return await fetch("http://localhost:5000/fourServices")
        .then((res) => res.json())
        .then((data) => data);
    },
    queryKey: ["4services"],
  });
  return (
    <div className="my-8 lg:my-24 w-4/5 lg:w-full mx-auto ">
      <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-center lg:text-left">
        Popular Services
      </h1>
      {isPending ? (
        <div className="mt-6 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:gap-10">
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
        </div>
      ) : (
        <div className="mt-6 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:gap-10">
          {services?.map((service, i) => {
            return <Cards key={i} service={service}></Cards>;
          })}
        </div>
      )}
      <div className="text-center my-20">
        <Link to="/services">
          <Button className="bg-[#164863] lg:text-lg">Show All</Button>
        </Link>
      </div>
    </div>
  );
}
