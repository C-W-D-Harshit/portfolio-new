import React, { useState } from "react";
import Scard from "../home/Scard";
import {
  AiFillCode,
  AiOutlineAntDesign,
  AiOutlineHome,
  AiOutlineTransaction,
} from "react-icons/ai";
import { IconButton } from "@mui/material";
import { BsArrowDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { Element, scroller } from "react-scroll";
import { MdOutlineAccountBox } from "react-icons/md";
import { BiClipboard } from "react-icons/bi";
import { TbBooks } from "react-icons/tb";
import SpecCard from "../cards/specCard";

const Services = () => {
  return (
    <div className="home" name="services" id="services">
      <Scard icon={<TbBooks />} text={`services`} />
      <p className="home_tit">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        My <span style={{ color: "var(--green-f)" }}>Specialization</span>
      </p>
      <div className="ser_holder">
        <SpecCard
          one="Website Design"
          two="I know Figma and Framer"
          ico={<AiOutlineAntDesign />}
        />
        <SpecCard
          one="Devlopment"
          two="I make full stack websites like ecommerce app and blogs"
          ico={<AiFillCode />}
        />
        <SpecCard
          one="SEO/Marketing"
          two="I increse the traffic of your website"
          ico={<AiOutlineTransaction />}
        />
      </div>
    </div>
  );
};

export default Services;
