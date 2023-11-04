import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";

export function ServicesHome() {
  return (
    <div className="my-24">
      <h1 className="text-5xl font-bold">Popular Services</h1>
      <div className="mt-24 grid grid-cols-2 gap-10">
        <Card className="bg-[#9BBEC8]">
          <CardHeader floated={false} className="">
            <img
              src="https://ca-times.brightspotcdn.com/dims4/default/c987ae9/2147483647/strip/true/crop/2048x1363+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F51%2F61%2F56bc6796fb9f847b62a830e4a6db%2Fla-167754-me-0908-bikelane1-wjs-jpg-20150706"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center text-[#164863]">
            <h4 className="mb-2 text-2xl font-bold">City Commute Share</h4>
            <p className="mb-2 text-xl font-bold">description</p>
            <p className="mb-2 text-xl font-bold">provider name</p>
            <p className="mb-2 text-xl font-bold">price</p>
          </CardBody>
        </Card>
      </div>
      <div className="text-center my-20">
        <Button className="bg-[#164863]">Show All</Button>
      </div>
    </div>
  );
}
