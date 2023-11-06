import { Button } from "@material-tailwind/react";

import { Search } from "../../Components/Search/Search";
import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Cards from "../../Components/Card/Cards";

const Services = () => {
  const services = useLoaderData();
  const [filtered, setFiltered] = useState(services);
  const [show, setShow] = useState(false);

  return (
    <div className="w-full my-20">
      <Search services={services} setFiltered={setFiltered}></Search>

      <div>
        {filtered.length ? (
          !show ? (
            <div className="my-6 lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:gap-10">
              {filtered?.slice(0, 6).map((service, i) => {
                return <Cards key={i} service={service}></Cards>;
              })}
            </div>
          ) : (
            <div className="my-6 lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:gap-10">
              {filtered.map((service, i) => {
                return <Cards key={i} service={service}></Cards>;
              })}
            </div>
          )
        ) : (
          <div className="text-center space-y-5">
            <Button className="bg-[#164863] flex items-center gap-4">
              <ArrowLeftCircleIcon className="w-8"></ArrowLeftCircleIcon> See
              Services
            </Button>
            <h1 className="text-5xl">No Data Found</h1>
          </div>
        )}
      </div>
      {filtered.length > 6 ? (
        <div className="text-center my-20">
          <Button
            onClick={() => {
              setShow(true);
            }}
            className={`bg-[#164863] lg:text-lg ${show ? "hidden" : ""}`}
          >
            Show All
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Services;
