import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Rating,
  Textarea,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "../../Components/Skeleton/Skeleton";
import Swal from "sweetalert2";

const Manage_Services = () => {
  const { user } = useContext(AuthContext);
  const [remaining, setRemaining] = useState([]);

  const { data: info, isPending } = useQuery({
    queryFn: async () => {
      return await axios
        .get(`http://localhost:5000/myServices/${user.email}`)
        .then((response) => {
          setRemaining(response.data);
          return response.data;
        });
    },
    queryKey: ["manageServices"],
  });

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      color: "#164863",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "orange",
      background: "#ddf2fd",
      showCancelButton: true,
      confirmButtonColor: "#164863",
      cancelButtonColor: "orange",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const remain = remaining.filter((booking) => booking._id !== id);
        axios
          .delete(`http://localhost:5000/services/${id}`)
          .then((res) => {
            console.log(res);
            setRemaining(remain);
          })
          .catch((err) => console.error(err));
        Swal.fire({
          title: "Deleted!",
          color: "#164863",
          iconColor: "#164863",
          background: "#ddf2fd",
          confirmButtonColor: "#164863",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  console.log(info);
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  useEffect(() => {
    document.title = "RideWave | Manage Services";
  }, []);

  return (
    <div className="w-full my-20">
      <h1 className="text-center text-4xl font-bold">Manage Your Services</h1>
      <div>
        <div className="my-6 lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:gap-10">
          {!isPending ? (
            remaining?.map((myServices, i) => {
              const {
                _id,
                providerImage,
                providerName,
                serviceArea,
                serviceDescription,
                serviceImage,
                serviceName,
                servicePrice,
              } = myServices;
              return (
                <Card key={i} className="bg-[#]">
                  <CardHeader floated={false} className="h-32 lg:h-56">
                    <img src={serviceImage} alt="profile-picture" />
                  </CardHeader>
                  <CardBody className="text-center text-[#164863] space-y-4">
                    <h4 className="text-lg lg:text-2xl font-bold">
                      {serviceName}
                    </h4>
                    <p className=" opacity-70 text-sm md:text-base">
                      {serviceDescription}
                    </p>
                    <div className="px-2 flex justify-between items-center gap-4">
                      <div className="flex gap-4">
                        <img
                          src={providerImage}
                          className=" w-[40px] h-[40px] object-cover object-top  rounded-full"
                          alt=""
                        />
                        <div>
                          <p className="font-bold text-sm lg:text-base">
                            {providerName}
                          </p>
                          <p className="opacity-70 text-xs text-left">You</p>
                        </div>
                      </div>
                      <Rating
                        unratedColor="blue"
                        ratedColor="blue"
                        readonly
                        value={4}
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between px-2">
                      <p className=" lg:text-xl">
                        <span className="font-bold">Price:</span>{" "}
                        <span className="text-[#0091ff]">{servicePrice}</span>
                      </p>
                      <p>
                        <span className="font-bold lg:text-xl">Area:</span>{" "}
                        <span className="text-[#0091ff]">{serviceArea}</span>
                      </p>
                    </div>
                    <div className="flex justify-evenly">
                      <Button
                        onClick={() => handleOpen("md")}
                        className="bg-[#164863] text-[8px] lg:text-base mt-4"
                      >
                        Edit
                      </Button>

                      <Button
                        onClick={() => handleRemove(_id)}
                        className="bg-[#164863] text-[8px] lg:text-base mt-4"
                      >
                        Remove
                      </Button>
                    </div>
                  </CardBody>
                  <Dialog
                    open={size === "md"}
                    size={size || "md"}
                    handler={handleOpen}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0.9, y: -100 },
                    }}
                  >
                    <DialogHeader className="text-[#164863]">
                      Edit Service
                    </DialogHeader>
                    <DialogBody>
                      <form className="space-y-4">
                        <Input
                          type="text"
                          value={serviceImage}
                          placeholder="Service url"
                          className=" !border-[#164863] focus:!border-[#164863] "
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="service name"
                          className=" !border-[#164863] focus:!border-[#164863] "
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="your name"
                          className=" !border-[#164863] focus:!border-[#164863] "
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="your email"
                          className=" !border-[#164863] focus:!border-[#164863] "
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        <Input
                          type="number"
                          placeholder="price"
                          className=" !border-[#164863] focus:!border-[#164863] "
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="service area"
                          className=" !border-[#164863] focus:!border-[#164863] "
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        <Textarea
                          type="text"
                          rows={4}
                          placeholder="service area"
                          className=" !border-[#164863] focus:!border-[#164863] "
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        <Button type="submit" className="bg-[#164863]">
                          <span>Update</span>
                        </Button>
                      </form>
                    </DialogBody>
                  </Dialog>
                </Card>
              );
            })
          ) : (
            <Skeleton></Skeleton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manage_Services;
