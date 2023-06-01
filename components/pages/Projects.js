import React, { useState } from "react";
import Scard from "../home/Scard";
import { TbLayoutDashboard } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="home" name="projects" id="projects">
      <Scard
        icon={<TbLayoutDashboard />}
        text={`projects`}
        style={{ marginBottom: "1rem" }}
      />
      <div className="pro_hold">
        <Link
          href={`https://urbanbliss.cleverdevloper.in`}
          className="pro"
          target="_blank"
        >
          <div className="pro_img">
            <Image
              src="/urbanbliss1.png"
              alt="urbanbliss"
              height="1555"
              width="1900"
              quality={100}
            />
          </div>
          <div className="pro_cont">
            <p>Urban Bliss</p>
            <p>
              Introducing a cutting-edge, full-stack e-commerce website powered
              by a custom Next.js server that harnesses an incredible amount of
              power. With a strong emphasis on user-friendliness, this website
              offers an unparalleled experience for customers. Its sleek and
              intuitive design ensures that users can effortlessly navigate
              through products, browse categories, and complete purchases with
              ease.
            </p>
          </div>
        </Link>
        <Link
          href={`https://bites.cleverdevloper.in`}
          className="pro"
          target="_blank"
        >
          <div className="pro_img">
            <Image
              src="/bites.png"
              alt="bites"
              height="1555"
              width="1900"
              quality={100}
            />
          </div>
          <div className="pro_cont">
            <p>Bites</p>
            <p>
              Introducing a cutting-edge, full-stack e-commerce website powered
              by a custom Next.js server that harnesses an incredible amount of
              power. With a strong emphasis on user-friendliness, this website
              offers an unparalleled experience for customers. Its sleek and
              intuitive design ensures that users can effortlessly navigate
              through products, browse categories, and complete purchases with
              ease.
            </p>
          </div>
        </Link>
        <Link
          href={`https://blog.cleverdevloper.in`}
          className="pro"
          target="_blank"
        >
          <div className="pro_img">
            <Image
              src="/blog.png"
              alt="blog"
              height="1555"
              width="1900"
              quality={100}
            />
          </div>
          <div className="pro_cont">
            <p>Blog App</p>
            <p>
              Introducing a cutting-edge, full-stack e-commerce website powered
              by a custom Next.js server that harnesses an incredible amount of
              power. With a strong emphasis on user-friendliness, this website
              offers an unparalleled experience for customers. Its sleek and
              intuitive design ensures that users can effortlessly navigate
              through products, browse categories, and complete purchases with
              ease.
            </p>
          </div>
        </Link>
        <Link
          href={`https://todo-app-without-db.vercel.app`}
          className="pro"
          target="_blank"
        >
          <div className="pro_img">
            <Image
              src="/todo.png"
              alt="todo"
              height="1555"
              width="1900"
              quality={100}
            />
          </div>
          <div className="pro_cont">
            <p>Todo App</p>
            <p>
              Introducing a cutting-edge, full-stack e-commerce website powered
              by a custom Next.js server that harnesses an incredible amount of
              power. With a strong emphasis on user-friendliness, this website
              offers an unparalleled experience for customers. Its sleek and
              intuitive design ensures that users can effortlessly navigate
              through products, browse categories, and complete purchases with
              ease.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
