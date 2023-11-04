import React from "react";
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
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navListMenuItems = [
  {
    title: "My Services",
  },
  {
    title: "Add Services",
  },
  {
    title: "My Schedules",
  },
];

function NavListMenu() {
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
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-[#164863] space-x-3">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        <Typography as="a" href="#" className="font-medium">
          <a className="flex items-center gap-2 py-2 hover:bg-transparent">
            Home
          </a>
        </Typography>
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        <Typography as="a" href="#" className="font-medium">
          <a className="flex items-center gap-2 py-2 hover:bg-transparent">
            Services
          </a>
        </Typography>
      </NavLink>

      <NavListMenu />
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="bg-[#9BBEC8] text-[#164863] max-w-full border-none  rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="mx-auto max-w-screen-xl  shadow-none  border-none">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-2xl"
          >
            RideWave
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Button className="bg-[#164863]" size="sm">
              Sign In
            </Button>
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
            <Button className="bg-[#164863]" size="sm" fullWidth>
              Sign In
            </Button>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
}
