import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { DataComing } from "../Lottie/Lottie";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [remaining, setRemaining] = useState([]);

  const { data: bookings, isPending } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/myBookings/${user.email}`
      );
      setRemaining(res.data);
      return res.data;
    },
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
          .delete(`http://localhost:5000/bookings/${id}`)
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
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs  uppercase bg-blue-200 hover:bg-opacity-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Service name
              </th>
              <th scope="col" className="px-6 py-3">
                Receive Will be
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {!isPending ? (
              remaining.length ? (
                remaining?.map((single, i) => {
                  return (
                    <tr key={i} className="  bg-blue-50 hover:bg-opacity-80 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      >
                        {single.serviceName}
                      </th>
                      <td className="px-6 py-4">{single.date}</td>
                      <td className="px-6 py-4">{single.location}</td>
                      <td className="px-6 py-4">
                        <span className="bg-orange-200 p-1 rounded-lg">
                          {single.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          onClick={() => handleRemove(single._id)}
                          className="bg-[#164863]"
                        >
                          remove
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <td colSpan={5} className="overflow-hidden">
                  <p className="text-center text-3xl my-2">
                    No Booking Available
                  </p>
                </td>
              )
            ) : (
              <DataComing></DataComing>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const MyPending = () => {
  const { user } = useContext(AuthContext);
  const [remaining, setRemaining] = useState([]);
  const { data: pending, isPending } = useQuery({
    queryKey: ["pending"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/myPending/${user.email}`
      );
      setRemaining(res.data);
      return res.data;
    },
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
          .delete(`http://localhost:5000/bookings/${id}`)
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

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs  uppercase bg-blue-200 hover:bg-opacity-80">
            <tr>
              <th scope="col" className="px-6 py-3">
                Service name
              </th>
              <th scope="col" className="px-6 py-3">
                Receive Will be
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {!isPending ? (
              pending.length ? (
                remaining?.map((single, i) => {
                  return (
                    <tr key={i} className="  bg-blue-100 hover:bg-opacity-20 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      >
                        {single.serviceName}
                      </th>
                      <td className="px-6 py-4">{single.date}</td>
                      <td className="px-6 py-4">{single.location}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`${
                            (single.status == "pending" &&
                              "bg-purple-700/80 text-white") ||
                            (single.status == "in progress" &&
                              "bg-yellow-700") ||
                            (single.status && "bg-lime-800 text-white")
                          } px-2 py-1 rounded-lg`}
                        >
                          {single.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          className="bg-[#164863]"
                          onClick={() => handleRemove(single._id)}
                        >
                          remove
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <td colSpan={5} className="overflow-hidden">
                  <p className="text-center text-3xl my-2">No Pending works</p>
                </td>
              )
            ) : (
              <DataComing></DataComing>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { MyBooking, MyPending };
