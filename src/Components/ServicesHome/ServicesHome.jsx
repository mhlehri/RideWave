import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Rating,
} from "@material-tailwind/react";

export function ServicesHome() {
  return (
    <div className="my-8 lg:my-24 w-4/5 lg:w-full mx-auto ">
      <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-center lg:text-left">
        Popular Services
      </h1>
      <div className="mt-6 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:gap-10">
        <Card className="bg-[#]">
          <CardHeader floated={false} className="">
            <img
              src="https://ca-times.brightspotcdn.com/dims4/default/c987ae9/2147483647/strip/true/crop/2048x1363+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F51%2F61%2F56bc6796fb9f847b62a830e4a6db%2Fla-167754-me-0908-bikelane1-wjs-jpg-20150706"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center text-[#164863]">
            <h4 className="mb-2 text-lg lg:text-2xl font-bold">
              City Commute Share
            </h4>
            <p className="mb-2 opacity-70 text-sm md:text-base">
              Shared rides for convenient daily commuting within the city.
            </p>
            <div className="px-2 lg:px-6 mb-4 flex items-center gap-4">
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
            <div className="mb-6 flex flex-col lg:flex-row justify-between px-2 lg:px-6">
              <p className=" lg:text-xl text-left">
                <span className="font-bold">Price:</span>{" "}
                <span className="text-[#0091ff]">$10</span>
              </p>
              <Rating
                unratedColor="blue"
                ratedColor="blue"
                readonly
                value={4}
              />
            </div>

            <Button className="bg-[#164863] text-[8px]">View Detail</Button>
          </CardBody>
        </Card>
      </div>
      <div className="text-center my-20">
        <Button className="bg-[#164863] lg:text-lg">Show All</Button>
      </div>
    </div>
  );
}
