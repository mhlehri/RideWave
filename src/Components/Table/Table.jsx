import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings, isPending } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/myBookings/${user.email}`
      );
      return res.data;
    },
  });
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs  uppercase bg-gray-50">
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
            {bookings?.map((single, i) => {
              return (
                <tr key={i} className="bg-white border-b  hover:bg-gray-50 ">
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
                    <Button className="bg-[#164863]">remove</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const MyPending = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs  uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { MyBooking, MyPending };
