import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function Search() {
  const [search, setSearch] = React.useState("");
  const onChange = ({ target }) => setSearch(target.value);

  return (
    <div className="relative flex w-full max-w-[24rem]  mx-auto">
      <Input
        type="text"
        placeholder="search by service name..."
        value={search}
        onChange={onChange}
        className=" !border-[#164863] focus:!border-[#164863] pr-20 "
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />

      <Button
        size="sm"
        disabled={!search}
        className={`!absolute right-1 top-1 rounded ${
          search ? "bg-[#164863]" : "bg-[#364953]"
        }`}
      >
        Invite
      </Button>
    </div>
  );
}
