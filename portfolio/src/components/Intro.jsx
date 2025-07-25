import React from "react";
import dp from "../images/newdp.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro-container flex flex-col md:flex-row justify-between items-center mt-[70px] max-w-[1240px] mx-auto px-4 md:px-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div>
        <p className="font-bold text-xl md:text-[20px] text-blue-900 pt-3">
            My Name is
          </p>
          <p className="mt-8 md:mt-4 font-bold text-3xl md:text-[40px] text-blue-900">
            Ayoade Clinton
          </p>
          <p className="font-bold text-xl md:text-[25px] text-blue-900 pt-3 mt-2">
            Software Engineer
          </p>
        </div>
        <div>
          <p className="mt-6 md:mt-8 w-full md:w-[500px] text-base md:text-[18px] text-gray-700 font-semibold leading-relaxed">
          I'm a problem solver, vast in web projects, app development and also proficient in UI/UX design. </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-start mt-6 space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-2 bg-[#007BFF] hover:bg-[#0056D2] text-white text-base font-medium rounded">
            <a href="#contact">Message</a>
          </button>
          <Link to="https://docs.google.com/document/d/100n6klr03Vl5gc0qxGUWXp0v_0HtdxIgU49XF1T4PuY/edit?usp=drive_link">
            <button className="px-6 py-2 bg-[#007BFF] hover:bg-[#0056D2] text-white text-base font-medium rounded">
              View CV
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <img
          src={dp}
          alt="Ayoade Clinton"
          className="h-64 w-64 md:h-96 md:w-96 rounded-full opacity-2000"
          style={{
            filter: "blur(0)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default Intro;