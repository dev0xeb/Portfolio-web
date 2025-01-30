import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faBriefcase,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSchool, faBriefcase, faCalendarDays);

const Qualifications = () => {
  return (
    <div
      id="qualifications"
      className="flex flex-col justify-center items-center mt-[120px] max-w-[1240px] mx-auto px-4"
    >
      <p className="text-3xl md:text-4xl font-bold text-blue-900">
        Qualifications
      </p>
      <p className="text-lg md:text-xl font-semibold text-[#0056D2] mt-3">
        My personal Journey
      </p>

      <div className="flex flex-col md:flex-row mt-6 w-full">
        <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <p className="text-2xl md:text-[24px] font-bold text-blue-900 flex justify-center md:justify-start items-center">
            <FontAwesomeIcon
              icon={faSchool}
              style={{ color: "blue" }}
              className="mr-3"
            />
            Education
          </p>
          <div className="bg-blue-100 w-full md:w-[340px] h-auto md:h-72 rounded-lg px-5 pt-4 mt-6">
            <div className="border-l-4 border-blue-900 pl-4 rounded-lg mt-1">
              <p className="font-bold text-base md:text-[17px]">
                Diploma in Software Engineering
              </p>
              <p className="font-semibold">Semicolon Africa</p>
              <p className="font-light text-sm md:text-[14px]">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ color: "blue" }}
                  className="mr-3"
                />
                2024 - Present
              </p>
            </div>
            <div className="border-l-4 border-blue-900 pl-4 rounded-lg mt-6">
              <p className="font-bold text-base md:text-[17px]">
                Diploma in Business Education
              </p>
              <p className="font-semibold">Helen Business School, UK</p>
              <p className="font-light text-sm md:text-[14px]">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ color: "blue" }}
                  className="mr-3"
                />
                2025
              </p>
            </div>
            <div className="border-l-4 border-blue-900 pl-4 rounded-lg mt-6">
              <p className="font-bold text-base md:text-[17px]">
                Bachelor of Arts (B.A)
              </p>
              <p className="font-semibold">Osun State University</p>
              <p className="font-light text-sm md:text-[14px]">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ color: "blue" }}
                  className="mr-3"
                />
                2018 - 2022
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-2xl md:text-[24px] font-bold text-blue-900 flex justify-center md:justify-start items-center">
            <FontAwesomeIcon
              icon={faBriefcase}
              style={{ color: "blue" }}
              className="mr-3"
            />
            Experience
          </p>
          <div className="bg-blue-100 w-full md:w-[340px] h-auto md:h-72 rounded-lg px-5 pt-4 mt-6">
            <div className="border-l-4 border-blue-900 pl-4 rounded-lg mt-1">
              <p className="font-bold text-base md:text-[17px]">
                Software Engineer Trainee
              </p>
              <p className="font-semibold">Semicolon Africa</p>
              <p className="font-light text-sm md:text-[14px]">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ color: "blue" }}
                  className="mr-3"
                />
                May 2024 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;