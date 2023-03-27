import React from 'react';
import '../index.css';
function NewsItem({title,description,url,urlToImage}) {
  return (
    
    <div className='story'>
        <img className='news-img' src={urlToImage} alt={urlToImage} />
        <h3 className='title'><a href={url}>{title}</a></h3>
        <p className='info'>{description}</p>
    </div>

    
  )
}

export default NewsItem