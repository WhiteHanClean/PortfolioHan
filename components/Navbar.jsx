import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialTray from "./SocialTray";
import Head from "next/head";

const variants = {
  open: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: {
      // duration: 0.1,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    rotateZ: "0deg",
    transition: { stiffness: 1000 },
  },
  closed: {
    y: 50,
    opacity: 0,
    rotateZ: "5deg",
    transition: { stiffness: 200, duration: 0.1 },
  },
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [page, setPage] = useState("home");
  const router = useRouter();
  const defaultNav = {
    home: "inActive",
    about: "inActive",
    work: "inActive",
  };
  const [isActive, setActive] = useState(defaultNav);
  useEffect(() => {
    let Path = router.asPath.slice(1);
    Path = Path === "" ? "home" : Path;
    setActive({ ...defaultNav, [Path]: "Active" });
    setPage(Path);
  }, [router]);

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      exitBeforeEnter
      className={
        isOpen
          ? "fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-0 transition duration-1000 ease-in-out antialiased w-full py-4 bg-dark"
          : "fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-0 transition duration-1000 ease-in-out antialiased w-full py-4"
      }
    >
      <Head>
        <title>{page.toUpperCase() + " | Han Portfolio"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="title" content="TechAkhil - Portfolio" />
        <meta
          name="description"
          content="Ilgiz Arykbaev, React Dev based in Kyrgyzstan. Explore more about me and my works here !"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Han - Portfolio" />
        <meta property="og:site_name" content="techakhil" />
        <meta
          property="og:description"
          content="Ilgiz Arykbaev, React Dev based in Kyrgyzstan. Explore more about me and my works here !"
        />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          name="keywords"
          content="PortFolio, about me, about han,ilgiz,  han.me, ILGIZ ARYKBAEV, han, ilgiz arykbaev"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.techakhil.me/" />
        <meta name="twitter:site" content="@techakhil_me" />
        <meta name="twitter:creator" content="@techakhil_me" />
        <meta property="twitter:title" content="TechAkhil - Portfolio" />
        <meta
          property="twitter:description"
          content="Akhil Padmanabhan, Frontend Dev and Designer based in India. Explore more about me and my works here !"
        />
        <meta
          property="twitter:image"
          content="https://www.techakhil.me/thumbnail.png"
        />
      </Head>
      <div className="flex  justify-between items-center">
        <ul className="md:flex pointer-events-auto	 hidden items-center space-x-20 text-xs antialiased font-medium tracking-widest">
          <li>
            <Link href="/">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.home}`}
              >
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.work}`}
              >
                WORK
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.about}`}
              >
                ABOUT
              </a>
            </Link>
          </li>
         
          <li>
            <a
              href="https://www.figma.com/file/2jr92CFt6rLnaBQ7Q2lgeg/Untitled?node-id=0%3A1&t=nlY02MFeKT5aMPy5-0"
              target="_blank"
              className={`h-8 flex flex-col justify-center fx-underline ${isActive.contact}`}
            >
              RESUME
            </a>
          </li>
        </ul>
        <button
          className="text-light pointer-events-auto	 md:hidden w-10 h-10 relative focus:outline-none"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <div className="block w-10 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2 ">
            <span
              className={`block rounded-full absolute h-0.5 w-9 bg-current transform transition duration-1000 ease-in-out ${
                isOpen ? "-rotate-45" : "-translate-y-2.5"
              }`}
            ></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current   transform transition duration-1000 ease-in-out ${
                isOpen ? "-translate-x-10 opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current transform  transition duration-1000 ease-in-out ${
                isOpen ? "rotate-45" : "translate-y-2.5"
              }`}
            ></span>
          </div>
        </button>
        <Link href="/">
          <a className="pointer-events-auto">
            <motion.svg
              width="62.545"
              height="26.04"
              viewBox="0 0 62.545 26.04"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                stroke-linecap="round"
                fill-rule="evenodd"
                font-size="9pt"
                stroke="#ffffff"
                stroke-width="0.25mm"
                fill="#000000"
                style={{
                  stroke: "#ffffff",
                  strokeWidth: "0.25mm",
                  fill: "#ffffff",
                }}
              >
                <path
                  d="M 19.215 0 L 15.96 1.26 L 15.96 13.79 L 6.125 13.79 L 6.125 0 L 2.835 1.26 L 2.835 13.79 L 1.015 13.79 L 0 15.855 L 2.835 15.855 L 2.835 26.04 L 6.125 24.85 L 6.125 15.855 L 15.96 15.855 L 15.96 26.04 L 19.215 24.85 L 19.215 0 Z M 59.22 11.62 L 59.22 12.705 L 59.22 22.61 A 1.336 1.336 0 0 0 59.306 23.073 A 1.861 1.861 0 0 0 59.465 23.397 A 0.899 0.899 0 0 0 59.673 23.639 Q 59.877 23.8 60.165 23.8 Q 60.76 23.8 61.18 23.415 A 4.999 4.999 0 0 0 61.574 23.008 Q 61.765 22.787 61.957 22.523 A 8.531 8.531 0 0 0 62.02 22.435 L 62.545 22.96 A 5.249 5.249 0 0 1 61.193 24.719 A 6.204 6.204 0 0 1 60.97 24.902 A 4.917 4.917 0 0 1 60.292 25.354 Q 59.61 25.725 58.975 25.725 A 3.6 3.6 0 0 1 58.087 25.622 A 2.476 2.476 0 0 1 56.805 24.85 A 2.715 2.715 0 0 1 56.292 23.95 Q 56.148 23.542 56.085 23.038 A 6.804 6.804 0 0 1 56.035 22.19 L 56.035 12.915 A 4.343 4.343 0 0 0 56.021 12.549 Q 55.996 12.26 55.93 12.04 A 0.498 0.498 0 0 0 55.821 11.842 Q 55.732 11.745 55.587 11.71 A 0.777 0.777 0 0 0 55.405 11.69 A 1.815 1.815 0 0 0 54.41 12.017 Q 53.453 12.64 52.465 14.455 A 32.156 32.156 0 0 0 50.678 18.363 A 39.042 39.042 0 0 0 49.892 20.632 A 61.831 61.831 0 0 0 49.477 22.014 Q 48.935 23.9 48.843 24.804 A 3.282 3.282 0 0 0 48.825 25.13 L 45.78 26.04 L 45.78 11.06 Q 45.78 10.57 45.518 10.167 A 0.894 0.894 0 0 0 45.247 9.894 Q 45.07 9.782 44.837 9.767 A 1.134 1.134 0 0 0 44.765 9.765 Q 43.925 9.765 42.945 11.27 L 42.42 10.71 Q 42.875 9.45 43.925 8.592 A 4.491 4.491 0 0 1 44.68 8.087 Q 45.184 7.823 45.689 7.757 A 2.591 2.591 0 0 1 46.025 7.735 A 4.915 4.915 0 0 1 46.831 7.797 Q 47.708 7.943 48.213 8.435 A 2.312 2.312 0 0 1 48.856 9.629 A 3.437 3.437 0 0 1 48.93 10.36 L 48.93 19.565 L 49.07 19.565 A 107.858 107.858 0 0 1 49.883 16.993 Q 50.269 15.828 50.643 14.806 A 59.312 59.312 0 0 1 50.89 14.14 Q 51.765 11.83 53.34 9.782 Q 54.644 8.087 56.285 7.795 A 3.968 3.968 0 0 1 56.98 7.735 A 2.898 2.898 0 0 1 57.646 7.806 Q 58.49 8.005 58.8 8.767 A 4.734 4.734 0 0 1 59.039 9.57 Q 59.22 10.426 59.22 11.62 Z M 38.115 11.025 L 35.595 12.39 A 5.008 5.008 0 0 0 34.795 11.501 A 6.641 6.641 0 0 0 34.055 10.937 Q 33.075 10.29 31.955 10.29 A 5.788 5.788 0 0 0 30.199 10.548 A 5.001 5.001 0 0 0 28.84 11.217 A 5.862 5.862 0 0 0 26.877 13.574 A 6.989 6.989 0 0 0 26.81 13.72 A 8.163 8.163 0 0 0 26.154 16.279 A 9.918 9.918 0 0 0 26.11 17.22 A 13.34 13.34 0 0 0 26.222 18.999 Q 26.348 19.938 26.618 20.72 A 6.523 6.523 0 0 0 27.055 21.718 Q 27.891 23.251 29.577 23.427 A 4.351 4.351 0 0 0 30.03 23.45 A 5.491 5.491 0 0 0 31.577 23.246 A 3.732 3.732 0 0 0 33.985 21.14 A 11.595 11.595 0 0 0 35.063 16.524 A 13.497 13.497 0 0 0 35.07 16.1 L 35.07 14.525 L 38.15 13.23 L 38.15 22.435 A 1.698 1.698 0 0 0 38.364 23.254 A 2.024 2.024 0 0 0 38.395 23.31 A 0.879 0.879 0 0 0 38.621 23.572 Q 38.829 23.73 39.13 23.73 A 1.569 1.569 0 0 0 40.054 23.415 Q 40.544 23.066 40.985 22.33 L 41.51 22.89 Q 41.09 24.08 40.04 24.903 Q 38.99 25.725 37.94 25.725 A 3.185 3.185 0 0 1 37.037 25.604 A 2.295 2.295 0 0 1 35.718 24.605 A 4.153 4.153 0 0 1 35.215 23.439 Q 35 22.644 35 21.63 L 34.93 21.63 A 9.052 9.052 0 0 1 33.017 24.324 A 8.645 8.645 0 0 1 32.568 24.728 Q 31.08 25.97 29.435 25.97 A 6.853 6.853 0 0 1 27.581 25.734 A 4.829 4.829 0 0 1 24.938 23.922 Q 23.602 22.127 23.438 19.268 A 14.351 14.351 0 0 1 23.415 18.445 Q 23.415 15.715 24.64 13.317 A 10.158 10.158 0 0 1 27.405 9.908 A 9.944 9.944 0 0 1 27.982 9.485 Q 30.1 8.05 32.655 8.05 Q 34.37 8.05 35.893 8.785 Q 37.415 9.52 38.115 11.025 Z"
                  vector-effect="non-scaling-stroke"
                />
              </g>
            </motion.svg>
          </a>
        </Link>

        {/* <img src="https://placehold.co/120x42" alt="vx" /> */}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            animate="open"
            initial="closed"
            exit="closed"
            variants={variants}
            className="flex pointer-events-auto	 flex-col md:hidden space-y-8 h-screen items-center justify-center text-xl tracking-widest"
          >
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                title="HOME"
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/"
              >
                HOME
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/about"
              >
                ABOUT
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/work"
              >
                WORK
              </Link>
            </motion.li>
          
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <a
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="https://www.figma.com/file/2jr92CFt6rLnaBQ7Q2lgeg/Untitled?node-id=0%3A1&t=nlY02MFeKT5aMPy5-0"
                target="_blank"
              >
                RESUME
              </a>
            </motion.li>
            <motion.div
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <SocialTray />
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
