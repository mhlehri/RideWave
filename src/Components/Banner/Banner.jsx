const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center gap-12 items-center h-[80vh] w-3/4 lg:w-full mx-auto">
      <div className="lg:w-1/2 space-y-2 text-center lg:text-left ">
        <h1 className="text-3xl lg:text-5xl font-semibold">RideWave</h1>
        <h4 className=" lg:text-xl opacity-80">
          Make your ride safe and fun. Your smooth ride-sharing solution.
          Connect, share, and commute effortlessly with our reliable platform.
        </h4>
      </div>
      <div className="lg:w-1/2">
        <img
          src="https://www.goteso.com/products/assets/images/clone-scripts/blabla/blabla-right-header.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
