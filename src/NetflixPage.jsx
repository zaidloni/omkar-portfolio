import React from "react";
import IMAGES from "./assets";

const NetflixPage = () => {
  return (
    <div className="">
      <img src={IMAGES.NetflixBg} alt="bg" className="absolute -z-10 " />
      <p className="drop-shadow-xl pt-12 font-bold text-[68px] text-center z-10 leading-none">
        Netflix Web Redesign
      </p>
      <p className="text-xl font-medium mb-8 px-40 mt-8 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      <p className="text-center">
        Proptotype Link Here:
        <a href="" className="text-[#00109F] underline">
          https://xd.adobe.com/view/cdde1e91-4a43-4cbf-b536-0098dbbff2aa-988d/
        </a>
      </p>

      <div className="flex  justify-center mt-28 bg-[#FF0D0D]">
        <div className="relative bottom-10">
          <img src={IMAGES.N1} alt="Netflix" className=" z-50" />
          <img src={IMAGES.N3} alt="Netflix" className=" z-50" />
          <img src={IMAGES.N5} alt="Netflix" className=" z-50" />
        </div>
        <div className="">
          <img src={IMAGES.N2} alt="Netflix" className=" z-50" />
          <img src={IMAGES.N4} alt="Netflix" className=" z-50" />
          <img src={IMAGES.N6} alt="Netflix" className=" z-50" />
        </div>
      </div>
    </div>
  );
};

export default NetflixPage;
