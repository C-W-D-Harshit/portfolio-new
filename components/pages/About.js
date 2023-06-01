import React, { useState } from "react";
import Scard from "../home/Scard";
import { MdOutlineAccountBox } from "react-icons/md";

const About = () => {
  return (
    <div className="home" id="about">
      <Scard icon={<MdOutlineAccountBox />} text={`about`} />
      <p className="home_tit" style={{ width: "87%" }}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Empowering businesses through{" "}
        <span style={{ color: "var(--green-f)" }}>
          full stack development
        </span>{" "}
        expertise.
      </p>
      <p className="home_des">
        As a full stack developer, I am passionate about creating powerful and
        engaging web applications. With expertise in both front-end and back-end
        technologies, I strive to deliver seamless user experiences and robust
        functionality. I excel in crafting responsive interfaces, implementing
        efficient databases, and optimizing performance to ensure optimal
        results. By leveraging my skills in various programming languages and
        frameworks, I have the ability to bring ideas to life and solve complex
        problems. I am dedicated to staying updated with the latest industry
        trends and technologies, allowing me to deliver innovative solutions
        that drive business growth. With a strong commitment to quality,
        efficiency, and collaboration, I am ready to contribute my skills to
        help businesses thrive in the digital landscape
      </p>
    </div>
  );
};

export default About;
