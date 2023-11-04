const OurApp = () => {
  return (
    <div className="my-56">
      <h1 className="text-5xl font-bold text-center">Get Our App</h1>
      <p className="text-xl text-center mt-5 w-1/2 mx-auto mb-12">
        Download the RideWave app for seamless and convenient ride-sharing on
        the go. Enjoy a hassle-free commute with just a few taps.
      </p>
      <div className="flex items-center gap-16">
        <div className="w-1/2">
          <img src="https://imgur.com/a/ey1W79C" alt="" />
        </div>
        <div className="w-1/2 space-y-4">
          <h2 className="text-3xl font-bold underline">App Features</h2>
          <ul className="space-y-2 list-disc">
            <li>
              <span className="font-bold">Intuitive Interface:</span> Navigate
              the app effortlessly with an intuitive user interface designed for
              smooth and user-friendly interactions.
            </li>
            <li>
              <span className="font-bold">Instant Ride Requests:</span> Request
              and confirm rides instantly within the app, ensuring quick and
              efficient booking for your daily commute.
            </li>
            <li>
              <span className="font-bold">Real-Time Notifications:</span> Stay
              updated with real-time notifications, including ride status
              updates, driver details, and any changes to your journey.
            </li>
            <li>
              <span className="font-bold">Secure Profile Management:</span>
              Manage your profile securely within the app, including payment
              information, ride history, and preferences, ensuring a
              personalized and secure ride-sharing experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
