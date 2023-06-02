import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IconButton } from "@mui/material";
import { GoMail } from "react-icons/go";
const Main_Card = () => {
  return (
    <div className="mainCard">
      <div>
        <p>Harshit</p>
        <p>Full Stack Dev</p>
      </div>
      <div>
        <Image src="/img-pro.jpg" width={500} height={500} alt="noob" />
      </div>
      <div>
        <Link href="mailto:hello@cleverdevloper.in">
          <p>hello@cleverdevloper.in</p>
        </Link>

        <p>Based in Noida, U.P, India</p>
        <p>@2023 Harshit. All Rights Reserved</p>
      </div>
      <div className="card_but">
        <Link href="/" style={{ textDecoration: "none" }}>
          <IconButton>
            <BsTwitter />
          </IconButton>
        </Link>
        <Link href="/" style={{ textDecoration: "none" }}>
          <IconButton>
            <AiOutlineInstagram />
          </IconButton>
        </Link>
        <Link href="/" style={{ textDecoration: "none" }}>
          <IconButton>
            <AiFillGithub />
          </IconButton>
        </Link>
        <Link href="/" style={{ textDecoration: "none" }}>
          <IconButton>
            <AiFillLinkedin />
          </IconButton>
        </Link>
      </div>
      <Link href="mailto:hello@cleverdevloper.in" className="card_cta">
        <IconButton>
          <GoMail style={{ fontSize: "3rem", color: "#000000" }} />
        </IconButton>
        <p>HIRE ME!</p>
      </Link>
    </div>
  );
};

export default Main_Card;
