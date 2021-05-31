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
                        <div className="user">{props.value.poster}</div>
                        <div className="card__text">{props.value.cardtext}</div>
                        <Post value={props.value}></Post>
                    </div>
                    <div className="action__section">
                        <div className="far fa-comment action__item comments"></div><label className="action__item__count">10</label>
                        <div className="far fa-heart action__item like"></div><label className="action__item__count">10</label>
                        <div className="far fa-share-square action__item share"></div><label className="action__item__count">10</label>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Card