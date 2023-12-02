import { useContext } from "react";
import { AuthContext } from "./../../Components/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center gap-7 h-[60vh] flex-col">
      <h1 className="text-3xl font-bold">Your Information</h1>
      <img src={user?.photoURL} className="max-w-xl" alt="profile-picture" />

      <div className="text-center text-[#164863] space-y-4">
        <h4 className="text-lg lg:text-2xl font-bold">
          Name : {user?.displayName}
        </h4>
        <p className=" opacity-70 text-sm md:text-base">
          Email : {user?.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
