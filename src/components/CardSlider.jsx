import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../index.css";
import CardItem from "./CardItem";

const CardSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=elonmusk&apiKey=547f617f49344db89ab0acb2aeef921a`
      );
      setArticles(response.data.articles);
      console.log(response);
      // console.log(response.data.articles.urlToImage)
    };
    getArticles();
  }, []);
  return (
    <motion.div className="carousel">
      <motion.div
        className="inner-carousel"
        drag="x"
        dragConstraints={{ right: 0 }}
      >
        {articles.map((article) => {
          return (
            <CardItem
              urlToImage={article.urlToImage}
              title={article.title}
              publishedAt={article.publishedAt}
              author={article.author}
              url={article.url}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default CardSlider;
