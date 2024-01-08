import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const navListMenuItems = [
  {
    title: "MySchedules",
  },
  {
    title: "AddServices",
  },
  {
    title: "ManageServices",
  },
];

function NavListMenu() {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title }, key) => (
    <NavLink
      to={`/${title}`}
      key={key}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "underline" : ""
      }
    >
      <menu className="flex items-center gap-3 rounded-lg">
        <div>
          <a className="flex items-center text-sm font-bold p-2">{title}</a>
        </div>
      </menu>
    </NavLink>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        {user ? (
          <MenuHandler>
            <Typography as="div" className="font-medium">
              <a
                className="flex items-center gap-2 py-2 pr-4 font-medium cursor-pointer"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                DashBoard
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
            </Typography>
          </MenuHandler>
        ) : (
          ""
        )}
        <MenuList className="hidden bg-[#9BBEC8] text-[#164863] max-w-screen-xl rounded-xl lg:block">
          <ul className="outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-[#164863] lg:space-x-3">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        <Typography as="a" href="#" className="font-medium">
          <a className="flex items-center py-2 hover:bg-transparent">Home</a>
        </Typography>
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        <Typography as="a" href="#" className="font-medium">
          <a className="flex items-center  py-2 hover:bg-transparent">
            Services
          </a>
        </Typography>
      </NavLink>

      <NavLink
        to="/faq"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        <Typography as="a" href="#" className="font-medium">
          <a className="flex items-center  py-2 hover:bg-transparent">Faq</a>
        </Typography>
      </NavLink>

      <NavListMenu />
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, signO } = useContext(AuthContext);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const profileMenuItems = [
    {
      label: (
        <Link className="w-full" to={`/profile/${user?.displayName}`}>
          <Button
            type="button"
            className="w-full bg-[#164863] flex gap-2 items-center hover:bg-[#1e84bbd3]"
          >
            {`${user?.displayName}`}
          </Button>
        </Link>
      ),
      icon: UserCircleIcon,
    },
    {
      label: (
        <Button
          type="button"
          className="w-full bg-[#164863] flex gap-2 items-center hover:bg-[#1e84bbd3]"
          onClick={() =>
            signO()
              .then(() => {
                toast.success("Successfully Logged Out!", {
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
              .catch((err) => console.log(err))
          }
        >
          <PowerIcon className="w-4"></PowerIcon>
          <span>Sign Out</span>
        </Button>
      ),
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Navbar className="bg-[#9BBEC8] text-[#164863] max-w-full border-none  rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="mx-auto max-w-screen-xl  shadow-none  border-none">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-2xl flex items-center justify-center"
          >
            <img
              className="w-16"
              src="https://www.goteso.com/products/assets/images/clone-scripts/blabla/blabla-right-header.png"
              alt=""
            />{" "}
            RideWave
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            {user ? (
              <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                placement="bottom-end"
              >
                <MenuHandler>
                  <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                  >
                    <Avatar
                      variant="circular"
                      size="sm"
                      alt="tania andrew"
                      className="border border-gray-900 p-0.5"
                      src={user.photoURL}
                    />
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3 w-3 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </MenuHandler>
                <MenuList className="p-0 bg-[#164863]">
                  {profileMenuItems.map(({ label }) => {
                    return (
                      <div
                        key={label}
                        onClick={closeMenu}
                        className={`flex items-center rounded hover:bg-transparent`}
                      >
                        {label}
                      </div>
                    );
                  })}
                </MenuList>
              </Menu>
            ) : (
              <Link to="/signIn">
                <Button className="bg-[#164863]" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            {user ? (
              <div className="flex gap-1 items-center">
                <img
                  src={user.photoURL}
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />{" "}
                <p>{user.displayName}</p>
                <Link>
                  <Button
                    onClick={() =>
                      signO()
                        .then(() => {
                          toast.success("Successfully Logged Out!", {
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
                        .catch((err) => console.log(err))
                    }
                    className="bg-[#164863]"
                    size="sm"
                    fullWidth
                  >
                    Sign Out
                  </Button>
                </Link>
              </div>
            ) : (
              <Link to="/signIn">
                <Button className="bg-[#164863]" size="sm" fullWidth>
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
}
