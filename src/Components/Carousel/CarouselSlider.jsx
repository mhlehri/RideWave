import { Carousel } from "@material-tailwind/react";

export function CarouselSlider() {
  return (
    <Carousel
      className="rounded-xl my-4 "
      autoplay={true}
      prevArrow={false}
      navigation={false}
      nextArrow={false}
      loop={true}
    >
      <img
        src="https://www.goteso.com/products/assets/images/clone-scripts/blabla/blabla-right-header.png"
        alt="image 1"
        className="lg:h-[500px] mx-auto object-fit"
      />
      <img
        src="https://i.ibb.co/sRMbCcN/online-ordering-taxi-car-rent-sharing-using-service-mobile-application-333239-96-removebg-preview.png"
        alt="image 1"
        className="lg:h-[500px] mx-auto  object-fit"
      />
      <img
        src="https://o.remove.bg/downloads/440ebbbe-3b8a-4e59-a5a9-16c370d2fdf1/ride-dynamic-pricing-abstract-concept-vector-illustration_107173-35412__1_-removebg-preview.png"
        alt="image 1"
        className="lg:h-[500px] mx-auto object-fit"
      />
    </Carousel>
  );
}
