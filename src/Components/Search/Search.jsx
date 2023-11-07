import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function Search({ services, setFiltered }) {
  const [search, setSearch] = React.useState("");
  const onChange = ({ target }) => setSearch(target.value);
  const handleC = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    const filter = services?.filter((v) =>
      v.serviceName.toLowerCase().match(value.toLowerCase())
    );
    if (filter.length > 0) {
      setFiltered(filter);
    } else {
      setFiltered([]);
    }
  };
  return (
    <div className="mb-20 text-center">
      <form onSubmit={handleC}>
        <div className="relative flex w-full max-w-[24rem] mx-auto">
          <Input
            type="text"
            placeholder="search by service name..."
            value={search}
            name="search"
            variant="static"
            onChange={onChange}
            className=" !border-[#164863] focus:!border-[#164863] p-2 "
            labelProps={{
              className: "hidden",
            }}
          />

          <Button
            type="submit"
            size="sm"
            disabled={!search}
            className={`!absolute right-1 top-1 rounded ${
              search ? "bg-[#164863]" : "bg-[#364953]"
            }`}
          >
            Search
          </Button>
        </div>
      </form>
      <p className="text-xs mt-4 opacity-75">
        <span className="font-bold">Hints:</span> City Commute, Long-Distance,
        Airport Shuttle, Carpool Connection, Corporate, For Events,Community
        Carpooling, Daily.
      </p>
    </div>
  );
}
