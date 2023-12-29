import React from "react";
import IMAGES from "./assets";

const WheelUpPage = () => {
  return (
    <div className="bg-[#A9DDF0] relative -z-10">
      <img src={IMAGES.W1} alt="w1" className="absolute -z-[9] top-[427px]" />
      <img
        src={IMAGES.W2}
        alt="w2"
        className="absolute top-[126px] right-0 -z-[9] "
      />
      <img
        src={IMAGES.W3}
        alt="w3"
        className="absolute top-[696px] left-[159px] -z-[9] "
      />
      <img
        src={IMAGES.W4}
        alt="w4"
        className="absolute top-[1563px]  -z-[9] "
      />

      <img
        src={IMAGES.W5}
        alt="w5"
        className="absolute top-[1428px] right-0  -z-[9] "
      />

      <img
        src={IMAGES.W6}
        alt="w6"
        className="absolute top-[2115px]  w-full -z-[8] "
      />

      <p className="drop-shadow-xl font-bold text-[68px] text-center z-10">
        WheelUp Responsive Design
      </p>
      <p className="text-xl font-medium px-24 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>

      <img src={IMAGES.WheelUp} alt="wheel up" className="mx-auto z-50 pb-64" />
    </div>
  );
};

export default WheelUpPage;
