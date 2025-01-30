import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub, faCopyright);

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[120px] w-full bg-blue-700 py-8">
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/clinton-ayoade-45315b238"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity duration-300"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "white", fontSize: "24px" }}
            className="cursor-pointer"
          />
        </a>
        <a
          href="https://github.com/dev0xeb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity duration-300"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "white", fontSize: "24px" }}
            className="cursor-pointer"
          />
        </a>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm md:text-[16px] text-white">
          <FontAwesomeIcon icon={faCopyright} style={{ color: "white" }} />{" "}
          Ayoade Clinton. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;