import { useEffect } from "react";
import { MyBooking, MyPending } from "../../Components/Table/Table";

const My_schedule = () => {
  useEffect(() => {
    document.title = "RideWave | My Schedule";
  }, []);
  return (
    <div className="my-24 px-4">
      <h1 className="text-2xl font-bold my-4">My Bookings</h1>
      <MyBooking></MyBooking>
      <h1 className="text-2xl font-bold mt-20 mb-4">My Pending works</h1>
      <MyPending></MyPending>
    </div>
  );
};

export default My_schedule;
