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
    <div className="my-28">
      {/* features section title*/}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Our Key Features</h1>
        <h4 className="text-xl w-1/2 mx-auto">
          Discover how RideWave makes your commute seamless and efficient with
          these essential features.
        </h4>
      </div>

      {/* features... */}
      <div className="grid grid-cols-3  justify-center gap-8 my-12">
        <div>
          <LinkIcon className="w-12 mx-auto mb-2"></LinkIcon>
          <h1 className="text-2xl font-bold mb-2">Effortless Connectivity</h1>
          <p>
            Easily connect with nearby commuters and share rides seamlessly for
            a convenient and efficient travel experience.
          </p>
        </div>
        <div>
          <ShieldCheckIcon className="w-12 mx-auto mb-2"></ShieldCheckIcon>
          <h1 className="text-2xl font-bold mb-2">Secure Ride Matching</h1>
          <p>
            Utilize our secure ride-matching algorithm to find compatible travel
            partners based on preferences, location, and travel routes.
          </p>
        </div>
        <div>
          <MapPinIcon className="w-12 mx-auto mb-2"></MapPinIcon>
          <h1 className="text-2xl font-bold mb-2">Real-Time Tracking</h1>
          <p>
            Enjoy the benefits of real-time tracking, allowing you to monitor
            your ride and stay updated on the status and location of your shared
            journey.
          </p>
        </div>
        <div>
          <UserGroupIcon className="w-12 mx-auto mb-2"></UserGroupIcon>
          <h1 className="text-2xl font-bold mb-2">Community-Driven Platform</h1>
          <p>
            oin a vibrant community of like-minded commuters, contributing to a
            sustainable environment and fostering a sense of collaboration and
            camaraderie.
          </p>
        </div>
        <div>
          <HeartIcon className="w-12 mx-auto mb-2"></HeartIcon>
          <h1 className="text-2xl font-bold mb-2 ">Reliable Support</h1>
          <p>
            Access reliable customer support and assistance, ensuring a smooth
            and trouble-free ride-sharing experience for all users.
          </p>
        </div>
        <div>
          <BanknotesIcon className="w-12 mx-auto mb-2"></BanknotesIcon>
          <h1 className="text-2xl font-bold mb-2 ">Smart Payment Options</h1>
          <p>
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
