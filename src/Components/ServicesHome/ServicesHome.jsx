import { Card, CardHeader, CardBody } from "@material-tailwind/react";

export function ServicesHome() {
  return (
    <div className="my-24">
      <h1 className="text-5xl font-bold">Popular Services</h1>
      <div className="mt-24 grid grid-cols-2 gap-5 ">
        <Card className="">
          <CardHeader floated={false} className="h-80">
            <img src="/img/team-3.jpg" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center text-[#164863]">
            <h4 className="mb-2 text-2xl font-bold">Natalie Paisley</h4>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
