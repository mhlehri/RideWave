import { Button } from "@material-tailwind/react";

const MyBooking = () => {
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
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <Button className="bg-[#164863]">remove</Button>
              </td>
            </tr>
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
