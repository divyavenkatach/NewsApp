import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { motion } from "framer-motion";
// import { useGlobalContext } from '../context';
// import { FaBars } from 'react-icons/fa';
const NewsList = () => {
  // const { openSidebar } = useGlobalContext();
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("technology");
  const[width,setWidth]=useState(0);
  const carousel=useRef();

  useEffect(()=>{
    console.log(carousel.current.scrollWidth,carousel.current.offsetWidth);
    setWidth(carousel.current.offsetWidth-290)

  },[])



  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=547f617f49344db89ab0acb2aeef921a`
      );
      setArticles(response.data.articles);
      console.log(response);
      // console.log(response.data.articles.urlToImage)
    };
    getArticles();
  }, [query]);
  return (
    <div>
      {/* <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button> */}
      <motion.div ref={carousel} className="button-container">
        <h3>Top Stories For You</h3>
        <motion.div
          className="btn-container"
          drag="x"
          dragConstraints={{ right: 0,left:-width }}
        >
          {/* <button></button>
          <button className="btn" onClick={() => setQuery("")}>
            <h4>All</h4>
          </button> */}
          {/* <button className="btn" onClick={() => setQuery("google")}>
            <h4>Google</h4>
          </button> */}
          <button className="btn" onClick={() => setQuery("All")}>
            <h4>All</h4>
          </button>
          <button className="btn" onClick={() => setQuery("Android")}>
            <h4>Android</h4>
          </button>
          <button className="btn" onClick={() => setQuery("Cricket")}>
            <h4>Cricket</h4>
          </button>
          <button className="btn" onClick={() => setQuery("IPhone")}>
            <h4>IPhone</h4>
          </button>
          <button className="btn" onClick={() => setQuery("Google")}>
            <h4>Google</h4>
          </button>
        </motion.div>
      </motion.div>
      <section className="stories">
        {articles.map((article) => {
          return (
            <NewsItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
      </section>
    </div>
  );
};
export default NewsList;
