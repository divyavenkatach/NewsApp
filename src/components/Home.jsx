
import React from 'react';
import { FaBars,FaSearch } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import ExploreButton from './ExploreButton';
import '../index.css'
const Home= () => {
  const { openSidebar} = useGlobalContext();
  return (
    <main>
       
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <h3>Zintlr News</h3>
      <FaSearch className="search-icon" />
      <div>
      
      <p>Here you can explore all kinds of cool stuff.</p>
      <ExploreButton />
    </div>
    </main>
    
  );
};

export default Home;