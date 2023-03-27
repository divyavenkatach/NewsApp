import React from 'react'
import {FaTimes,FaSearch} from 'react-icons/fa'
import {links,social} from '../data'

import { useGlobalContext } from '../context';
import '../index.css'
const Sidebar=()=> {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
          <div className='sidebar-header'>
            {/* <img src='#' className='logo' alt='coding addict' /> */}
            <h2>Zintlr News</h2>
           
            <button className='close-btn' onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul className='links'>
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
          <ul className='social-icons'>
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
}

export default Sidebar