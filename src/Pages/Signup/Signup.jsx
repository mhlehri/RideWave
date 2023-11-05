import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
export function SignUp() {
  const { createUser, profileUpdate, logOut, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return toast.error("Password should be at least 6 character!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!password.match(/[A-Z]/)) {
      return toast.error("Password should have at least one UpperCase!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (
      !password.match(/[!@#\$%\^&\*\(\)\-_\+=\{\}\[\]:;'<>,\.\?/\\\|`~"]/)
    ) {
      return toast.error("Password should have at least special Character!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      createUser(email, password)
        .then((res) => {
          toast.success("Successfully Registered!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          profileUpdate(name, photo)
            .then(
              logOut()
                .then(() => navigate("/login"))
                .catch()
            )
            .catch();
        })
        .catch((err) => {
          toast.error(`${err.message}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  };
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-lg my-20 px-6 py-5 dark:bg-blue-gray-100 rounded-lg">
        <Card color="transparent" shadow={false} className="text-black">
          <Typography variant="h4" className="">
            Sign Up
          </Typography>
          <Typography className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form onSubmit={handleSignUp} className="mt-8 mb-2 max-w-screen-lg ">
            <div className="mb-4 flex flex-col gap-6 ">
              <Input type="text" size="lg" name="name" label="Name" required />
              <Input
                type="text"
                size="lg"
                name="photo"
                label="Photo URL"
                required
              />
              <Input
                type="email"
                size="lg"
                name="email"
                label="Email"
                required
              />
              <Input
                type="password"
                size="lg"
                name="password"
                required
                label="Password"
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-6" fullWidth>
              Register
            </Button>
            <Typography className="mt-4 text-center font-normal">
              Already have an account?
              <Link to="/login" className="font-medium underline">
                Sign In
              </Link>
            </Typography>
          </form>
          <div className="w-full mx-auto text-center">
            <hr className="border-t-2 py-2" />

            <Button
              onClick={() =>
                googleLogin()
                  .then(() => {
                    navigate("/");
                    toast.success("Successfully registered!", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  })
                  .catch()
              }
              className="bg-green-800   mb-2"
              size="sm"
            >
              <span>Login with Google</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
