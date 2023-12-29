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

      <p className="drop-shadow-xl pt-12 font-bold text-[68px] text-center z-10 leading-none">
        WheelUp Responsive Design
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
      <img
        src={IMAGES.WheelUp}
        alt="wheel up"
        className="mx-auto mt-20 z-50 "
      />

      <div className=" relative ">
        <img src={IMAGES.W6} alt="w6" className="absolute   w-full  " />

        <img src={IMAGES.W7} alt="w7" className="absolute top-80" />
        <img
          src={IMAGES.W8}
          alt="w8"
          className="absolute right-0 top-96"
        />

        <p className="drop-shadow-xl pt-16 pl-32 font-bold text-[68px]  left-60 z-20 text-white">
          WheelUp Web Design
        </p>
        <div className="flex flex-col justify-center -z-[100] mt-16 bg-[#01B6BD]">
          <div className="flex  mx-auto ">
            <img src={IMAGES.F1} alt="Frame" className=" z-50" />
            <img src={IMAGES.F2} alt="Frame" className=" z-50 " />
          </div>
          <div className="flex  mx-auto mr-8 mt-5">
            <img src={IMAGES.F3} alt="Frame" className=" z-50" />
            <img src={IMAGES.F4} alt="Frame" className=" z-50 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelUpPage;
