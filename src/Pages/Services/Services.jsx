import { Button } from "@material-tailwind/react";

import { Search } from "../../Components/Search/Search";
import { useLoaderData, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Cards from "../../Components/Card/Cards";
import { useQuery } from "@tanstack/react-query";
import { reload } from "firebase/auth";
import { Skeleton } from "../../Components/Skeleton/Skeleton";

const Services = () => {
  // const services = useLoaderData();

  const [filtered, setFiltered] = useState([]);
  const { data: ses, isPending } = useQuery({
    queryFn: async () => {
      return await fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => data);
    },
    queryKey: ["services"],
  });

  console.log(filtered);

  const [show, setShow] = useState(false);
  useEffect(() => {
    document.title = "RideWave | Services";
    if (ses) {
      setFiltered(ses);
    }
  }, [ses]);

  return (
    <div className="w-full my-20">
      <Search services={ses} setFiltered={setFiltered}></Search>

      <div>
        {!isPending ? (
          filtered.length ? (
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
              <Button
                onClick={() => window.location.reload(false)}
                className="bg-[#164863] flex items-center gap-4"
              >
                <ArrowLeftCircleIcon className="w-8"></ArrowLeftCircleIcon> See
                Services
              </Button>
              <h1 className="text-5xl">No Data Found</h1>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
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
