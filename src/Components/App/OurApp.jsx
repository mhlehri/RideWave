import { App } from "../Lottie/Lottie";

const OurApp = () => {
  return (
    <div
      className="my-8 lg:my-56 w-3/4 mx-auto lg:w-full"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        Get Our App
      </h1>
      <p className="lg:text-xl text-center mt-5 w-3/4 lg:w-1/2 mx-auto mb-12 opacity-70">
        Download the RideWave app for seamless and convenient ride-sharing on
        the go. Enjoy a hassle-free commute with just a few taps.
      </p>
      <div className="flex items-center flex-col lg:flex-row-reverse gap-16  mx-auto">
        <div className="lg:w-1/2">
          <App></App>
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold underline">
            App Features
          </h2>
          <ul className="space-y-2 list-disc text-sm lg:text-base">
            <li>
              <span className="font-bold">Intuitive Interface:</span>{" "}
              <span className="opacity-60">
                Navigate the app effortlessly with an intuitive user interface
                designed for smooth and user-friendly interactions.
              </span>
            </li>
            <li>
              <span className="font-bold">Instant Ride Requests:</span>{" "}
              <span className="opacity-60">
                Request and confirm rides instantly within the app, ensuring
                quick and efficient booking for your daily commute.
              </span>
            </li>
            <li>
              <span className="font-bold">Real-Time Notifications:</span>{" "}
              <span className="opacity-60">
                Stay updated with real-time notifications, including ride status
                updates, driver details, and any changes to your journey.
              </span>
            </li>
            <li>
              <span className="font-bold">Secure Profile Management:</span>{" "}
              <span className="opacity-60">
                Manage your profile securely within the app, including payment
                information, ride history, and preferences, ensuring a
                personalized and secure ride-sharing experience.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
