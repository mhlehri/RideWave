import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
export const Contact = () => {
  return (
    <div className="my-8 lg:my-40 px-6 lg:px-0">
      <h1 className="mb-5 text-xl lg:text-3xl font-bold">
        Contact us for more
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <form className="mb-2">
          <div className="mb-1 flex flex-col gap-6 text-[#164863]">
            <Typography variant="h6" className="-mb-3">
              Your Email
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-[#164863] focus:!border-[#164863] "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" className="-mb-3">
              Message
            </Typography>
            <Textarea
              size="lg"
              placeholder="your comment here...."
              className=" !border-[#164863] focus:!border-[#164863] "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            ></Textarea>
          </div>

          <Button className="mt-6 bg-[#164863]" fullWidth>
            Submit
          </Button>
        </form>

        <MapContainer
          className="w-full"
          id="map"
          center={[23.7086, 90.4017]}
          zoom={15}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.7086, 90.4017]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
