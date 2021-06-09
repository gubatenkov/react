import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [linksContainerHeight, setLinksContainerHeight] = useState(null);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    // setLinksContainerHeight(linksHeight)
    if (showMenu) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showMenu])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-ico">
          {social.map((item) => {
            const { id, url, icon } = item;

            return (
              <li key={id}>
                <a href={url} style={{ padding: "0 7px" }}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
