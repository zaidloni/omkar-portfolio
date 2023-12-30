import React from "react";
import IMAGES from "./assets";

const UnderdogsExpPage = () => {
  return (
    <section className="bg-[#282626] p-[45px]">
      <div className=" flex  gap-10">
        <img
          src={IMAGES.UnderdogsLogo}
          alt="logo"
          className="w-[450px] h-[450px]"
        />
        <div>
          <p className="text-[#FFAD28] text-[50px] font-bold leading-none">
            Underdogs Studio LLP
          </p>
          <p className="text-[#C5C5C5] text-[26px] font-medium mt-8">
            Role: Game Designer Intern
          </p>
          <p className="text-[#C5C5C5] text-[26px] font-medium">
            Duration : 27/12/2021 to 27/04/2022
          </p>
          <p className="text-[#AFAFAF] text-2xl mb-[26px] mt-4">
            Having the opportunity to design games for Underdogs Studio LLP was
            a wonderful experience. There are so many things I have learned
            there. In my time there, I worked on two games, Maujflix, which is
            now Storypix, and Cloths Runner, a casual game.
          </p>
          <p className="text-[#AFAFAF] text-2xl">
            I worked on the game design document for Cloths Runner. & My work
            for Storypix included gamifying stories such as Antariksh Yatra,
            Bhutiya Gaav, Bangla No. 13, etc.
          </p>
        </div>
      </div>
      <p className="text-[#AFAFAF] text-2xl mt-8">
        Additionally, I tested the game's build versions. Also, I worked on the
        Storypix Monetization document. I created Social Media posts for
        storypix during my final month there. ASO (App Store Optimization) was
        also something that I have worked on. Having the opportunity to work
        with The Underdogs Studio LLP was a great experience for me.
      </p>

      <div className="mt-[30px] flex items-center gap-8">
        <p className="border-b border-b-white flex-1"></p>
        <p className="text-[#FFAD28] text-[28px] font-bold">
          Creatives for Underdogs Studio LLP
        </p>
        <p className="border-b border-b-white flex-1"></p>
      </div>

      <div className="flex justify-center gap-14 mt-8">
        <img src={IMAGES.U1} alt="u1" />
        <img src={IMAGES.U2} alt="u2" />
        <img src={IMAGES.U3} alt="u3" />
      </div>

      <div className="border-b border-b-white pb-[30px] flex justify-center gap-14 mt-14">
        <img src={IMAGES.U4} alt="u4" />
        <img src={IMAGES.U5} alt="u5" />
      </div>
    </section>
  );
};

export default UnderdogsExpPage;
