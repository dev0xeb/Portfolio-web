import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faWhatsapp, faArrowRight);

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center mt-[120px] max-w-[1240px] mx-auto px-4"
    >
      <p className="text-3xl md:text-4xl font-bold text-blue-900">Get in touch</p>
      <p className="text-lg md:text-xl font-semibold text-[#0056D2] mt-3">
        Contact Me
      </p>

      <div className="flex flex-col md:flex-row justify-center mt-6 w-full space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center justify-center bg-blue-100 w-full md:w-64 py-6 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "blue", fontSize: "25px" }}
          />
          <p className="pt-3 font-semibold text-lg md:text-[18px]">Email Address</p>
          <p className="text-sm md:text-base">clintonayomide96@gmail.com</p>
          <button className="pt-3 text-sm md:text-[13px] hover:underline">
            <a href="mailto:clintonayomide96@gmail.com">
              Write me{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "blue" }}
                className="ml-2"
              />
            </a>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center bg-blue-100 w-full md:w-64 py-6 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: "blue", fontSize: "25px" }}
          />
          <p className="pt-3 font-semibold text-lg md:text-[18px]">WhatsApp</p>
          <p className="text-sm md:text-base">+2347026612575</p>
          <button className="pt-3 text-sm md:text-[13px] hover:underline">
            <a href="https://wa.me/+2347026612575">
              Message me{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "blue" }}
                className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;