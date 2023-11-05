import {
  BanknotesIcon,
  HeartIcon,
  LinkIcon,
  MapPinIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Features = () => {
  return (
    <div className="my-12 lg:my-60">
      {/* features section title*/}
      <div className="text-center space-y-6">
        <h1 className="text-3xl lg:text-5xl font-bold">Our Key Features</h1>
        <h4 className="lg:text-xl lg:w-1/2 mx-auto opacity-70">
          Discover how RideWave makes your commute seamless and efficient with
          these essential features.
        </h4>
      </div>

      {/* features... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-12 my-12">
        <div className="w-3/4 mx-auto lg:w-full">
          <LinkIcon className="w-8 lg:w-12  mx-auto mb-3"></LinkIcon>
          <h1 className=" text-xl lg:text-2xl font-bold mb-2">
            Effortless Connectivity
          </h1>
          <p className="text-justify text-sm  opacity-60">
            Easily connect with nearby commuters and share rides seamlessly for
            a convenient and efficient travel experience.
          </p>
        </div>
        <div className="w-3/4 mx-auto lg:w-full">
          <ShieldCheckIcon className="w-8 lg:w-12  mx-auto mb-3"></ShieldCheckIcon>
          <h1 className=" text-xl lg:text-2xl font-bold mb-2">
            Secure Ride Matching
          </h1>
          <p className="text-justify text-sm  opacity-60">
            Utilize our secure ride-matching algorithm to find compatible travel
            partners based on preferences, location, and travel routes.
          </p>
        </div>
        <div className="w-3/4 mx-auto lg:w-full">
          <MapPinIcon className="w-8 lg:w-12  mx-auto mb-3"></MapPinIcon>
          <h1 className=" text-xl lg:text-2xl font-bold mb-2">
            Real-Time Tracking
          </h1>
          <p className="text-justify text-sm  opacity-60">
            Enjoy the benefits of real-time tracking, allowing you to monitor
            your ride and stay updated on the status and location of your shared
            journey.
          </p>
        </div>
        <div className="w-3/4 mx-auto lg:w-full">
          <UserGroupIcon className="w-8 lg:w-12  mx-auto mb-3"></UserGroupIcon>
          <h1 className=" text-xl lg:text-2xl font-bold mb-2">
            Community-Driven Platform
          </h1>
          <p className="text-justify text-sm  opacity-60">
            oin a vibrant community of like-minded commuters, contributing to a
            sustainable environment and fostering a sense of collaboration and
            camaraderie.
          </p>
        </div>
        <div className="w-3/4 mx-auto lg:w-full">
          <HeartIcon className="w-8 lg:w-12  mx-auto mb-3"></HeartIcon>
          <h1 className=" text-xl lg:text-2xl font-bold mb-2">
            Reliable Support
          </h1>
          <p className="text-justify text-sm  opacity-60">
            Access reliable customer support and assistance, ensuring a smooth
            and trouble-free ride-sharing experience for all users.
          </p>
        </div>
        <div className="w-3/4 mx-auto lg:w-full">
          <BanknotesIcon className="w-8 lg:w-12  mx-auto mb-3"></BanknotesIcon>
          <h1 className=" text-xl lg:text-2xl font-bold mb-2">Smart Payment</h1>
          <p className="text-justify text-sm  opacity-60">
            Enjoy flexible payment methods, including in-app payments and
            cashless transactions, making it easy to settle your ride costs
            securely and conveniently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
