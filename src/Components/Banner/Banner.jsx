const Banner = () => {
  return (
    <div className="flex items-center h-[80vh]">
      <div className="w-1/2 space-y-2">
        <h1 className="text-5xl font-semibold">RideWave</h1>
        <h4 className="text-xl">
          Make your ride safe and fun. Your smooth ride-sharing solution.
          Connect, share, and commute effortlessly with our reliable platform.
        </h4>
      </div>
      <div className="w-1/2">
        <img
          src="https://www.goteso.com/products/assets/images/clone-scripts/blabla/blabla-right-header.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
