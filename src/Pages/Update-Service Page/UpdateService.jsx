import { Button, Input, Textarea } from "@material-tailwind/react";

import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Add } from "../../Components/Lottie/Lottie";
import axios from "axios";
import Swal from "sweetalert2";

import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

const UpdateService = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: single, isLoading } = useQuery({
    queryFn: async () => {
      return await axios
        .get(`http://localhost:5000/details/${id}`)
        .then((response) => {
          return response.data;
        });
    },
    queryKey: ["updateServices"],
  });

  console.log(single);
  const handleUpdate = (e) => {
    e.preventDefault();
    const serviceName = e.target.serviceName.value;
    const serviceArea = e.target.serviceArea.value;
    const serviceDescription = e.target.serviceDescription.value;
    const serviceImage = e.target.serviceImage.value;
    const servicePrice = e.target.servicePrice.value;
    const update = {
      user: user.email,
      serviceImage,
      servicePrice,
      serviceArea,
      serviceName,
      serviceDescription,
    };
    axios
      .patch(`http://localhost:5000/updateServices`, update)
      .then((response) => {
        if (response.data.modifiedCount) {
          Swal.fire({
            title: "Updated!",
            color: "#164863",
            iconColor: "#164863",
            background: "#ddf2fd",
            confirmButtonColor: "#164863",
            text: "Your services has been updated.",
            icon: "success",
            confirmButtonText: "Ok!",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/ManageServices");
              document.location.reload();
            }
          });
        }
      });
  };

  return (
    <div>
      {!isLoading ? (
        <div className="my-24 mx-auto px-4">
          <h1 className="my-10 text-4xl text-center">Update Service</h1>
          <div
            className="flex 
          "
          >
            <div className="w-1/2">
              <Add></Add>
            </div>
            <form className="space-y-4 w-1/2" onSubmit={handleUpdate}>
              <Input
                type="text"
                required
                name="serviceImage"
                className=" !border-[#164863] focus:!border-[#164863] "
                defaultValue={single.serviceImage}
                labelProps={{
                  className: "hidden",
                }}
              />
              <Input
                type="text"
                required
                name="serviceName"
                className=" !border-[#164863] focus:!border-[#164863] "
                defaultValue={single.serviceName}
                labelProps={{
                  className: "hidden",
                }}
              />

              <Input
                disabled
                type="text"
                name="providerName"
                className=" !border-[#164863] focus:!border-[#164863] "
                defaultValue={`${single.providerName} (Your Name)`}
                labelProps={{
                  className: "hidden",
                }}
              />
              <Input
                disabled
                type="text"
                name="providerEmail"
                className=" !border-[#164863] focus:!border-[#164863] "
                defaultValue={`${single.providerEmail} (Your Email)`}
                labelProps={{
                  className: "hidden",
                }}
              />

              <Input
                required
                type="text"
                name="servicePrice"
                className=" !border-[#164863] focus:!border-[#164863] "
                defaultValue={`${single.servicePrice}`}
                labelProps={{
                  className: "hidden",
                }}
              />
              <Input
                required
                type="text"
                name="serviceArea"
                className=" !border-[#164863] focus:!border-[#164863] "
                defaultValue={`${single.serviceArea}`}
                labelProps={{
                  className: "hidden",
                }}
              />

              <Input
                required
                type="text"
                name="serviceDescription"
                defaultValue={single.serviceDescription}
                placeholder="description"
                className=" !border-[#164863] focus:!border-[#164863] "
                labelProps={{
                  className: "hidden",
                }}
              />
              <Button type="submit" className="bg-[#164863]">
                <span>Update</span>
              </Button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UpdateService;
