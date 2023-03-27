import React from 'react'
import '../index.css';
import {motion} from 'framer-motion';

function CardItem({urlToImage,author,title,publishedAt,url}) {
  
  return (
    <motion.div className='item' style={{backgroundImage: `url(${urlToImage})`, backgroundRepeat:'no-repeat' , backgroundPosition:'center',backgroundSize:'cover'}}>
      <div className="cardcontents">
        <h4 style={{color:'white'}}><a href={url}>{title}</a></h4>
        <p style={{color:'var(--clr-grey-3)'}}>By {author}</p>

      </div>
        

        {/* <img src={urlToImage} alt="" srcset="" /> */}
    </motion.div>
  )
}

export default CardItem