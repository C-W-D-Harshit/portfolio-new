import React, { useState } from "react";
import Scard from "../home/Scard";
import {
  TbBooks,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPhp,
  TbBrandTailwind,
  TbEyeglass,
} from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaWordpress } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="home" name="skills" id="skills">
      <Scard icon={<TbEyeglass />} text={`My Skills`} />
      <p className="home_tit">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        My <span style={{ color: "var(--green-f)" }}>Skills</span>
      </p>
      <div className="s_hold">
        <AiFillHtml5 />
        <FaCss3Alt />
        <TbBrandJavascript />
        <TbBrandPhp />
        <FaReact />
        <TbBrandTailwind />
        <FaWordpress />
        <BsFillBootstrapFill />
        <TbBrandNextjs />
      </div>
    </div>
  );
};

export default Skills;
