import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const update = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const signInG = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signO = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };

      if (currentUser) {
        axios.post("https://server-nu-umber.vercel.app/jwt", loggedInUser, {
          withCredentials: true,
        });
      } else {
        axios
          .post("https://server-nu-umber.vercel.app/logout", loggedInUser, {
            withCredentials: true,
          })
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
      }
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const userInfo = {
    signUp,
    signIn,
    update,
    signInG,
    signO,
    loading,
    user,
  };

  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
