import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAccountBox, MdOutlineLibraryBooks } from "react-icons/md";
import { BiClipboard } from "react-icons/bi";
import { TbBooks, TbEyeglass, TbLayoutDashboard } from "react-icons/tb";
import { BsCurrencyRupee } from "react-icons/bs";
import { useRouter } from "next/router";
import { Element, animateScroll, scroller } from "react-scroll";
import Link from "next/link";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="sidebar">
      <div className="sidebar_">
        <IconButton>
          <Link href="#intro" scroll={false} onClick={() => setIsActive(1)}>
            <AiOutlineHome
              className={isActive === 1 ? "side-ico-active" : "side-ico"}
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="#about" scroll={false} onClick={() => setIsActive(2)}>
            <MdOutlineAccountBox
              className={isActive === 2 ? "side-ico-active" : "side-ico"}
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="#resume" scroll={false} onClick={() => setIsActive(3)}>
            <BiClipboard
              className={isActive === 3 ? "side-ico-active" : "side-ico"}
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="#services" scroll={false} onClick={() => setIsActive(4)}>
            <TbBooks
              className={isActive === 4 ? "side-ico-active" : "side-ico"}
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="#skills" scroll={false} onClick={() => setIsActive(5)}>
            <TbEyeglass
              className={isActive === 5 ? "side-ico-active" : "side-ico"}
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="#projects" scroll={false} onClick={() => setIsActive(6)}>
            <TbLayoutDashboard
              className={isActive === 6 ? "side-ico-active" : "side-ico"}
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="#intro" scroll={false} onClick={() => setIsActive(7)}>
            <MdOutlineLibraryBooks
              className={isActive === 7 ? "side-ico-active" : "side-ico"}
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="#pricing" scroll={false} onClick={() => setIsActive(8)}>
            <BsCurrencyRupee
              className={isActive === 8 ? "side-ico-active" : "side-ico"}
            />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
