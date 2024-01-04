"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll(".section_");
      const navLi = document.querySelectorAll(".top-menu li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("active");
        }
        if (
          li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
        ) {
          li.classList.add("active");
        }
      });
    });
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("loaded");
    setToggle(!toggle);
  };

  return (
    <header className={toggle ? "active" : ""}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
          <span />
        </a>
        <div className="top-menu">
          <ul>
            <li className="">
              <a href="#resume" className="lnk">
                Resume
              </a>
            </li>
            <li className="">
              <a href="#services" className="lnk">
                Services
              </a>
            </li>
            <li className="">
              <a href="#works" className="lnk">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="btn">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};