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
              Bites is a sophisticated and intuitive full-stack food ordering
              website crafted with Next.js. Seamlessly blending cutting-edge
              technology and culinary excellence, Bites offers a delightful
              experience for food enthusiasts. Explore a wide range of
              delectable dishes, effortlessly navigate through user-friendly
              menus, and indulge in seamless online ordering. With its sleek
              design and robust functionality, Bites sets a new standard for the
              digital food industry, providing customers with a seamless and
              satisfying culinary journey.
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
              The Blog App is a professional and feature-rich full-stack web
              application built with Next.js. It empowers bloggers and content
              creators with a dynamic platform to express their ideas and engage
              with readers. With a sleek and intuitive design, the Blog App
              ensures a seamless user experience, allowing visitors to
              effortlessly navigate through captivating articles, leave
              comments, and interact with the vibrant blogging community.
              Leveraging the power of Next.js, this cutting-edge web app
              delivers exceptional performance and responsiveness, enhancing the
              reading and writing experience for both authors and readers alike.
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
              The Todo App is a versatile and efficient full-stack web
              application developed with Next.js. It offers a streamlined and
              intuitive interface to help users organize their tasks and boost
              productivity. With its sleek design and robust functionality, the
              Todo App allows users to effortlessly create, manage, and
              prioritize tasks, ensuring nothing falls through the cracks.
              Powered by Next.js, this dynamic web app delivers exceptional
              performance and responsiveness, enabling users to stay on top of
              their to-do lists with ease. Experience a seamless and efficient
              task management solution with the Todo App.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
