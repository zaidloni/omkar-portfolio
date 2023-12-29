import { useState } from "react";
import IMAGES from "./assets";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <main id="home" className="bg-[#252535]">
      {/* Hero Section */}
      <section className="flex items-center h-[100vh] border border-white">
        {/* Left */}
        <div className="flex-1 flex flex-col items-center">
          {/* Hello  */}
          <div className="border border-white text-[#FFAD28] text-2xl font-medium w-[103px] py-1 relative rounded-3xl text-center">
            <img
              src={IMAGES.HelloVector}
              alt="vector"
              className="absolute -right-5 -top-7"
            />
            Hello!
          </div>

          <div className="text-center">
            <p className="text-white font-semibold text-[90px] leading-1">
              I’m <span className="text-[#FFAD28]">Omkar</span>,
            </p>
            <p className="leading-none text-white font-semibold text-[90px]">
              UI/UX Designer.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 bg-[#323446] h-[100vh]"></div>
      </section>

      {/* UI Desgin Seciton */}
      <section id="ui" className="text-center mx-auto py-14">
        <p className="text-[40px] font-semibold text-[#FFAD28]">UI Design's</p>
        <p className="text-xl text-[#DBDBDB] mt-9 mb-11 px-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          soluta quos, tempora nobis similique magnam voluptas. Fugiat neque,
          dignissimos ex voluptas eligendi facere nihil et illum corrupti.
          Deleniti, sint rerum.
        </p>
        <div className="flex gap-11 justify-center">
          <Link to="/netflix">
            <img src={IMAGES.NetflixUI} alt="netflix ui" />
          </Link>

          <Link to="/amul">
            <img src={IMAGES.AmulUI} alt="amul ui" />
          </Link>
        </div>
        <div className="flex gap-11 mt-11 justify-center">
          <Link to="/deliciosso">
            <img src={IMAGES.DelicisoUI} alt="deliciso UI" />
          </Link>
          <Link to="/wheelUp">
            <img src={IMAGES.WheelUpUI} alt="wheelUp UI" />
          </Link>
        </div>
      </section>

      {/* Creatives Section */}
      <section id="creatives" className="text-center bg-[#323446] py-14">
        <p className="text-[40px] font-semibold text-[#FFAD28]">Creatives</p>
        <p className="text-xl text-[#DBDBDB] mt-9 mb-11 px-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          soluta quos, tempora nobis similique magnam voluptas. Fugiat neque,
          dignissimos ex voluptas eligendi facere nihil et illum corrupti.
          Deleniti, sint rerum.
        </p>
        <div className="flex gap-9 justify-center">
          <img src={IMAGES.C1} alt="creative" />
          <img src={IMAGES.C2} alt="creative" />
          <img src={IMAGES.C3} alt="creative" />
        </div>

        <div className="flex gap-9 mt-9 justify-center">
          <img src={IMAGES.C4} alt="creative" />
          <img src={IMAGES.C5} alt="creative" />
          <img src={IMAGES.C6} alt="creative" />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className=" mx-auto py-14 px-20">
        <p className="text-[40px] text-center font-semibold text-[#FFAD28]">
          Work Experience
        </p>

        <div className="flex gap-12 mt-16">
          {/* LivNest Exp */}
          <div className="px-8 py-6 bg-[#282626] flex gap-7">
            <img src={IMAGES.UnderdogsLogo} alt="company logo" />
            <div>
              <p className="text-[26px] font-bold text-white">
                Livnest Tech Pvt. Ltd.
              </p>
              <p className="text-lg text-white">Role: UI/UX Designer</p>
              <p className="text-lg text-white">
                Duration: 27 Dec 2021 - Ongoing
              </p>
              <p className="text-[#AFAFAF] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quo illum tenetur rem neque doloribus ducimus non, ea natus quis
                possimus tempore vero qui, culpa dolore id animi at accusamus.
                <Link to="/livnest">
                  <span className="text-[#FFAD28] font-semibold text-lg cursor-pointer">
                    see more
                  </span>
                </Link>
              </p>
            </div>
          </div>

          {/* Underdogs Exp */}
          <div className="px-8 py-6 bg-[#282626] flex gap-7">
            <img src={IMAGES.UnderdogsLogo} alt="company logo" />
            <div>
              <p className="text-[26px] font-bold text-white">
                Livnest Tech Pvt. Ltd.
              </p>
              <p className="text-lg text-white">Role: UI/UX Designer</p>
              <p className="text-lg text-white">
                Duration: 27 Dec 2021 - Ongoing
              </p>
              <p className="text-[#AFAFAF] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quo illum tenetur rem neque doloribus ducimus non, ea natus quis
                possimus tempore vero qui, culpa dolore id animi at accusamus.
                <Link to="/underdogs">
                  <span className="text-[#FFAD28] font-semibold text-lg cursor-pointer">
                    see more
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="fixed top-28 drop-shadow-xl flex flex-col items-center py-6 right-14  h-[70vh] w-11 bg-[#252535] rounded-full border border-[#585A68]">
        {/* Home */}
        <a onClick={() => setActiveSection("home")} href="#home">
          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77961 21.619V14.7142H15.2143V21.619C15.2143 22.3786 15.8258 23 16.573 23H20.6491C21.3964 23 22.0078 22.3786 22.0078 21.619V11.9523H24.3175C24.9425 11.9523 25.2414 11.1651 24.7659 10.7508L13.4073 0.352147C12.891 -0.117382 12.103 -0.117382 11.5867 0.352147L0.228058 10.7508C-0.233895 11.1651 0.0514288 11.9523 0.676424 11.9523H2.98619V21.619C2.98619 22.3786 3.5976 23 4.34487 23H8.42093C9.1682 23 9.77961 22.3786 9.77961 21.619Z"
              fill={activeSection == "home" ? "#FFAD28" : "#585A68"}
            />
          </svg>
        </a>
        <img className="my-3" src={IMAGES.Line} alt="line" />

        {/* UI Designs */}
        <a onClick={() => setActiveSection("ui")} href="#ui">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_63_28)">
              <path
                d="M6.08829 0H16.9117C18.5264 0 20.075 0.641443 21.2168 1.78322C22.3586 2.925 23 4.47358 23 6.08829V16.9117C23 18.5264 22.3586 20.075 21.2168 21.2168C20.075 22.3586 18.5264 23 16.9117 23H6.08829C4.47358 23 2.925 22.3586 1.78322 21.2168C0.641443 20.075 0 18.5264 0 16.9117L0 6.08829C0 4.47358 0.641443 2.925 1.78322 1.78322C2.925 0.641443 4.47358 0 6.08829 0ZM13.5202 6.62496H12.626V13.0477C12.6347 13.5334 12.515 14.0127 12.2791 14.4373C12.0491 14.8436 11.708 15.1752 11.2968 15.3956C10.8723 15.6295 10.3768 15.7454 9.80854 15.7454C9.24121 15.7454 8.74671 15.6295 8.32312 15.3966C7.91289 15.1751 7.57293 14.8431 7.34179 14.4382C7.10425 14.0142 6.98354 13.5347 6.992 13.0487V6.624H6.09787V13.109C6.08714 13.7356 6.24929 14.353 6.5665 14.8935C6.87988 15.4177 7.33125 15.846 7.87175 16.1316C8.4295 16.4345 9.07542 16.5859 9.80854 16.5859C10.5455 16.5859 11.1924 16.4354 11.7482 16.1345C12.2881 15.8489 12.739 15.4202 13.0515 14.8954C13.3678 14.3539 13.5307 13.7358 13.5211 13.109V6.62496H13.5202ZM17.0162 16.4191V6.62592H16.122V16.4201H17.0162V16.4191Z"
                fill={activeSection == "ui" ? "#FFAD28" : "#585A68"}
              />
            </g>
            <defs>
              <clipPath id="clip0_63_28">
                <rect width="23" height="23" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>

        <img className="my-3" src={IMAGES.Line} alt="line" />

        {/* Experience */}
        <a onClick={() => setActiveSection("experience")} href="#experience">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 4H14V2C14 0.89 13.11 0 12 0H8C6.89 0 6 0.89 6 2V4H2C0.89 4 0.00999999 4.89 0.00999999 6L0 17C0 18.11 0.89 19 2 19H18C19.11 19 20 18.11 20 17V6C20 4.89 19.11 4 18 4ZM12 4H8V2H12V4Z"
              fill={activeSection == "experience" ? "#FFAD28" : "#585A68"}
            />
          </svg>
        </a>
        <img className="my-3" src={IMAGES.Line} alt="line" />
      </div>
    </main>
  );
};

export default LandingPage;
