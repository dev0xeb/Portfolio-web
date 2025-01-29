import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAsterisk);

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center mt-[120px] max-w-[1240px] mx-auto px-4"
    >
      {/* Heading */}
      <p className="text-3xl md:text-4xl font-bold text-blue-900">Skills</p>
      <p className="text-xl md:text-2xl font-semibold text-[#0056D2] mt-3">
        My Technical Level
      </p>

      {/* Skill Cards */}
      <div className="flex flex-col md:flex-row justify-between mt-10 w-full">
        {/* Frontend Engineer Card */}
        <div className="bg-blue-100 w-full md:w-72 rounded-lg px-4 py-6 mb-6 md:mb-0 md:mr-4">
          <p className="text-lg md:text-[20px] font-bold text-center">
            Frontend Engineer
          </p>
          <div className="mt-4">
            {[
              "Javascript",
              "React.js",
              "Tailwind CSS",
              "CSS",
              "HTML",
              "TypeScript",
              "Vite",
            ].map((skill, index) => (
              <p key={index} className="text-sm md:text-[16px] font-semibold mt-2">
                <FontAwesomeIcon
                  icon="fa-solid fa-asterisk"
                  style={{ color: "blue" }}
                  className="mr-1"
                />{" "}
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Backend Engineer Card */}
        <div className="bg-blue-100 w-full md:w-72 rounded-lg px-4 py-6 mb-6 md:mb-0 md:mr-4">
          <p className="text-lg md:text-[20px] font-bold text-center">
            Backend Engineer
          </p>
          <div className="mt-4">
            {["Java", "Python", "Node.js"].map((skill, index) => (
              <p key={index} className="text-sm md:text-[16px] font-semibold mt-2">
                <FontAwesomeIcon
                  icon="fa-solid fa-asterisk"
                  style={{ color: "blue" }}
                  className="mr-1"
                />{" "}
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Technologies Card */}
        <div className="bg-blue-100 w-full md:w-72 rounded-lg px-4 py-6">
          <p className="text-lg md:text-[20px] font-bold text-center">
            Technologies
          </p>
          <div className="mt-4">
            {[
              "Spring Boot",
              "Test Driven Development (TDD)",
              "Django",
              "Flask",
              "Git & GitHub Actions",
              "Maven",
              "Redux",
              "Mongo DB",
              "Postman",
              "Rest API",
              "My SQL",
            ].map((skill, index) => (
              <p key={index} className="text-sm md:text-[16px] font-semibold mt-2">
                <FontAwesomeIcon
                  icon="fa-solid fa-asterisk"
                  style={{ color: "blue" }}
                  className="mr-1"
                />{" "}
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;