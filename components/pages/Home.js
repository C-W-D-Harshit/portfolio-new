import React, { useState } from "react";
import Scard from "../home/Scard";
import { AiOutlineHome } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { BsArrowDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { Element, scroller } from "react-scroll";

const Homes = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(1);

  const handleClick = (buttonId, sectionId) => {
    setIsActive(buttonId === isActive ? null : buttonId);
    const element = document.getElementById(sectionId);
    if (element) {
      // element.scrollIntoView({ behavior: "smooth" });
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <div id="intro" className="home">
      <Scard icon={<AiOutlineHome />} text={`intro`} />
      <p className="home_tit">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hello there! I'm{" "}
        <span style={{ color: "var(--green-f)" }}>Harshit</span>, a Full Stack
        Developer on a mission to create digital magic.
      </p>
      <p className="home_des">
        Empowering businesses through innovative web solutions as a skilled Full
        Stack Developer.
      </p>
      <div className="intro_c">
        <div className="intro_cta">
          <IconButton
            onClick={() => {
              handleClick(2, "about");
            }}
          >
            <BsArrowDown />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Homes;
