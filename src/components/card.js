import React from 'react'
import Post from './post'
import './card.css'

const Card = (props) => {
  

  return (
    <>
        <div className="card">
            <div className="icon">DEV</div>
                <div className="content">
                    <div className="card__header">  
                        <div className="user">{props.value}</div>
                        <div className="card__text">Card Text</div>
                        <Post></Post>
                    </div>
                    <div className="action__section">
                        <div className="action__item comments">comment</div>
                        <div className="action__item like">like</div>
                        <div className="action__item share">share</div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Card