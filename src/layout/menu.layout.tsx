import React, { useRef } from "react";

import { Link } from "react-scroll";

import asLogo from "@/assets/images/ASSC_Imagotipo_Grey.png";
import LongMenu from "@/components/menu-list";

export const MenuLayout: React.FC = () => {
  const stickyMenuRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        if (stickyMenuRef.current) {
          stickyMenuRef.current.style.opacity = "1";
          stickyMenuRef.current.style.transform = "translateY(0%)";
          stickyMenuRef.current.style.animation = "xbounce 0.5s ease-in-out";
        }
      } else {
        if (stickyMenuRef.current) {
          stickyMenuRef.current.style.opacity = "0";
          stickyMenuRef.current.style.transform = "translateY(-200%)";
          stickyMenuRef.current.style.animation = "none";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link
            activeClass="active"
            className="navbar-item"
            to="home-header-anchor"
            spy={true}
            smooth="easyInAnimation"
            duration={600}
            activeStyle={{ color: "#ec683b" }}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="navbar-item"
            to="projects-anchor"
            spy={true}
            smooth={true}
            duration={600}
            activeStyle={{ color: "#ec683b" }}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            className="navbar-item"
            to="contact-anchor"
            spy={true}
            smooth={true}
            duration={600}
            activeStyle={{ color: "#ec683b" }}
          >
            Contact
          </Link>
        </div>
        <Link
          activeClass="active"
          to="home-header-anchor"
          spy={true}
          smooth="easyInAnimation"
          duration={600}
          className="logo-container"
        >
          <img src={asLogo} width={42} alt="alberto logo" />
        </Link>
      </div>
      <div ref={stickyMenuRef} className="sticky-menu">
        <LongMenu />
      </div>
    </>
  );
};
