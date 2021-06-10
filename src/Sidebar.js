import React, { useEffect } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isAsideIsOpened, setAsideIsOpened, closeSidebar } = useGlobalContext()
  if (isAsideIsOpened) localStorage.setItem('side', isAsideIsOpened)

  useEffect(() => {
    const side = JSON.parse(localStorage.getItem('side'))
    setAsideIsOpened(side)
  }, [])

  return (
    <aside className={isAsideIsOpened ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img className="logo" src={logo} alt="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
