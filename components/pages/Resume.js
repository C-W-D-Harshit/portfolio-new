import React, { useState } from "react";
import Scard from "../home/Scard";
import { AiOutlineHome } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { BsArrowDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { Element, scroller } from "react-scroll";
import { MdOutlineAccountBox } from "react-icons/md";
import { BiClipboard } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="home" name="resume" id="resume">
      <Scard icon={<BiClipboard />} text={`resume`} />
      <p className="resume">Coming Soon</p>
    </div>
  );
};

export default Resume;
