import { Button, Input, Textarea } from "@material-tailwind/react";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Add } from "../../Components/Lottie/Lottie";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Add_Service = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "RideWave | Add Service";
  }, []);
  const { user } = useContext(AuthContext);
  const handleAdd = (e) => {
    e.preventDefault();
    const serviceImage = e.target.photo.value;
    const serviceName = e.target.SName.value;
    const providerName = user.displayName;
    const providerEmail = user.email;
    const providerImage = user.photoURL;
    const serviceArea = e.target.area.value;
    const serviceDescription = e.target.des.value;
    const servicePrice = e.target.price.value;
    const userInfo = {
      serviceImage,
      serviceName,
      providerName,
      providerEmail,
      providerImage,
      serviceArea,
      servicePrice,
      serviceDescription,
    };
    console.log(userInfo);
    axios
      .post("https://server-nu-umber.vercel.app/addServices", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data.insertedId) {
          Swal.fire({
            title: "Successfully inserted!",
            color: "#164863",
            iconColor: "#164863",
            background: "#ddf2fd",
            confirmButtonColor: "#164863",
            text: "Your booking has been added.",
            icon: "success",
          });
          navigate("/ManageServices");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="my-24 mx-auto px-4">
      <h1 className="my-10 text-4xl text-center">Add Service</h1>
      <div
        className="flex 
      "
      >
        <div className="w-1/2">
          <Add></Add>
        </div>
        <form className="space-y-4 w-1/2" onSubmit={handleAdd}>
          <Input
            type="text"
            required
            name="photo"
            placeholder="Image URL"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: " hidden ",
            }}
          />
          <Input
            type="text"
            name="SName"
            required
            placeholder="Service Name"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "hidden",
            }}
          />
          <Input
            name="PName"
            type="text"
            readOnly
            value={`${user.displayName} (Your Name)`}
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "hidden",
            }}
          />
          <Input
            name="PEmail"
            type="text"
            readOnly
            value={`${user.email} (Your Email)`}
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "hidden",
            }}
          />
          <Input
            name="price"
            type="text"
            required
            placeholder="price"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "hidden",
            }}
          />
          <Input
            name="area"
            required
            type="text"
            placeholder="service area"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "hidden",
            }}
          />
          <Textarea
            type="text"
            name="des"
            required
            placeholder="Service Description"
            className=" !border-[#164863] focus:!border-[#164863] "
            labelProps={{
              className: "hidden",
            }}
          />
          <Button type="submit" className="bg-[#164863]">
            <span>Add Button</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Add_Service;
