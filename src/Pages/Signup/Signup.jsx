import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./../../Components/AuthProvider/AuthProvider";
import { Hi } from "../../Components/Lottie/Lottie";
import useAxiosPublic from "./../../../../../assignment12/client12/src/hooks/useAxiosPublic";
export function SignUp() {
  const { signUp, update, signInG, signO } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosP = useAxiosPublic();
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
      signUp(email, password)
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
          console.log(res);

          update(name, photo)
            .then((res) => {
              const user = { email, name, photo };
              console.log(res);

              signO()
                .then(() => navigate("/signIn"))
                .catch();
            })
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
  useEffect(() => {
    document.title = "RideWave | Sign Up";
  }, []);
  return (
    <div className="mx-3 flex items-center ">
      <div className="flex-1 hidden md:block">
        <Hi></Hi>
      </div>
      <div className="flex-1 my-20 px-6 py-5 dark:bg-blue-gray-100 rounded-lg">
        <Card color="transparent" shadow={false} className="text-[#164863]">
          <Typography variant="h4" className="">
            Sign Up
          </Typography>
          <Typography className="mt-1 font-normal">
            Enter your details here.
          </Typography>
          <form onSubmit={handleSignUp} className="mt-8 mb-2 max-w-screen-lg ">
            <div className="mb-4 flex flex-col gap-6 ">
              <Input
                type="text"
                size="lg"
                name="name"
                placeholder="Name"
                className=" !border-[#164863] focus:!border-[#164863] "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Input
                type="email"
                size="lg"
                name="email"
                placeholder="Email"
                className=" !border-[#164863] focus:!border-[#164863] "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Input
                type="text"
                size="lg"
                name="photo"
                placeholder="Photo URL"
                className=" !border-[#164863] focus:!border-[#164863] "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Input
                type="password"
                size="lg"
                name="password"
                placeholder="Password"
                className=" !border-[#164863] focus:!border-[#164863] "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button type="submit" className="mt-6 bg-[#164863]" fullWidth>
              Register
            </Button>
            <Typography className="mt-4 text-center font-normal">
              Already have an account?
              <Link to="/signIn" className="font-medium underline">
                Sign In
              </Link>
            </Typography>
          </form>
          <div className="w-full mx-auto text-center">
            <hr className="border-t-2 py-2 border-[#164863]" />

            <Button
              onClick={() =>
                signInG()
                  .then(() => {
                    navigate("/");
                    toast.success(`Successfully Logged In!`, {
                      position: "top-center",
                      autoClose: 1500,
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
              className="bg-[#164863] flex mx-auto items-center gap-2  mb-2"
              size="sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#98ccfd"
                  d="M28.229,29.396c1.528-1.345,2.711-3.051,3.438-4.968c0.187-0.491,0.321-0.905,0.423-1.303l0.16-0.625	H20.5v-6h17.662c0.225,1.167,0.338,2.343,0.338,3.5c0,5.005-2.069,9.834-5.692,13.32L28.229,29.396z"
                ></path>
                <path
                  fill="#98ccfd"
                  d="M32.828,22c-0.501,3.231-2.175,6.075-4.594,8.058l3.825,3.278c3.175-2.873,5.329-6.852,5.828-11.336	L32.828,22z"
                ></path>
                <path
                  fill="#b6dcfe"
                  d="M20,38.5c-6.903,0-13.128-3.773-16.349-9.877l4.957-3.499C10.625,29.626,15.031,32.5,20,32.5	c2.713,0,5.277-0.851,7.439-2.465l4.624,3.963C28.695,36.906,24.434,38.5,20,38.5z"
                ></path>
                <path
                  fill="#b6dcfe"
                  d="M28.234,30.058C25.992,31.896,23.125,33,20,33c-5.407,0-10.041-3.303-12-8l-4.13,2.95	C6.807,33.899,12.917,38,20,38c4.645,0,8.866-1.775,12.059-4.664L28.234,30.058z"
                ></path>
                <path
                  fill="#b6dcfe"
                  d="M3.891,10.907C7.177,5.094,13.31,1.5,20,1.5c4.493,0,8.8,1.632,12.186,4.607l-4.212,4.212	C25.757,8.498,22.944,7.5,20,7.5c-4.84,0-9.196,2.763-11.271,7.093L3.891,10.907z"
                ></path>
                <path
                  fill="#b6dcfe"
                  d="M20,7V2C13.07,2,7.064,5.922,4.056,11.662l4.056,3.09C10.13,10.189,14.689,7,20,7z"
                ></path>
                <path
                  fill="#fff"
                  d="M3.235,27.789C2.083,25.324,1.5,22.707,1.5,20c0-2.838,0.661-5.66,1.917-8.197l4.905,3.737	C7.776,16.965,7.5,18.463,7.5,20c0,1.435,0.249,2.851,0.74,4.214L3.235,27.789z"
                ></path>
                <path
                  fill="#fff"
                  d="M7,20c0-1.869,0.402-3.642,1.112-5.248l-4.056-3.09C2.749,14.156,2,16.989,2,20 c0,2.858,0.684,5.55,1.869,7.951L8,25C7.357,23.461,7,21.772,7,20z"
                ></path>
                <path
                  fill="#4788c7"
                  d="M20,39c-7.056,0-13.489-3.887-16.792-10.144l-0.421-0.844C1.6,25.471,1,22.779,1,20 c0-2.906,0.681-5.817,1.969-8.419l0.48-0.908C6.824,4.702,13.163,1,20,1c4.599,0,9.043,1.68,12.516,4.731 c0.104,0.091,0.165,0.221,0.169,0.359c0.005,0.138-0.048,0.272-0.146,0.37l-4.212,4.212c-0.182,0.182-0.473,0.196-0.671,0.033 C25.532,8.961,22.813,8,20,8c-4.661,0-8.807,2.609-10.82,6.809l-0.398,0.928C8.266,17.084,8,18.525,8,20 c0,1.375,0.239,2.736,0.71,4.044l0.361,0.892C11.021,29.287,15.211,32,20,32c2.598,0,5.066-0.818,7.14-2.366l0.775-0.627 c1.449-1.276,2.591-2.926,3.285-4.757c0.178-0.469,0.307-0.866,0.406-1.25l0-0.001H20.5c-0.276,0-0.5-0.224-0.5-0.5v-6 c0-0.276,0.224-0.5,0.5-0.5h17.662c0.24,0,0.446,0.17,0.491,0.405C38.883,17.599,39,18.808,39,20c0,5.12-2.13,10.106-5.845,13.68 l-0.755,0.688C28.937,37.358,24.537,39,20,39z M20,2C13.523,2,7.518,5.507,4.326,11.153l-0.467,0.883C2.645,14.49,2,17.248,2,20 c0,2.631,0.568,5.181,1.688,7.577l0.41,0.823C7.221,34.317,13.316,38,20,38c4.297,0,8.465-1.556,11.736-4.38l0.735-0.669 C35.981,29.573,38,24.85,38,20c0-0.994-0.086-2.001-0.255-3H21v5h11.25c0.154,0,0.3,0.071,0.395,0.193s0.127,0.281,0.089,0.431 l-0.16,0.625c-0.108,0.422-0.248,0.853-0.44,1.357c-0.751,1.981-1.988,3.768-3.575,5.166l-0.806,0.652 C25.491,32.113,22.815,33,20,33c-5.188,0-9.728-2.939-11.848-7.671l-0.375-0.927C7.259,22.966,7,21.491,7,20 c0-1.598,0.288-3.159,0.855-4.639l0.414-0.965C10.459,9.827,14.951,7,20,7c2.889,0,5.689,0.938,7.935,2.65l3.515-3.514 C28.223,3.465,24.178,2,20,2z"
                ></path>
              </svg>
              <span> Login with Google</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
