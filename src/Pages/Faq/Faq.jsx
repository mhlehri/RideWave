import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { FAQ } from "../../Components/FAQ/FAQ";

const FaqPage = () => {
  return (
    <>
      <FAQ></FAQ>
      <h1 className="text-center text-xl lg:text-2xl font-semibold">
        Leave your Questions below
      </h1>
      <form className="my-12 w-full lg:w-1/2 mx-auto">
        <div className="mb-1 flex flex-col gap-6 text-[#164863]">
          <Typography variant="h6" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography variant="h6" className="-mb-3">
            Question
          </Typography>
          <Textarea
            size="lg"
            placeholder="your comment here...."
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          ></Textarea>
        </div>

        <Button className="mt-6 bg-[#164863]" fullWidth>
          Submit
        </Button>
      </form>
    </>
  );
};

export default FaqPage;
