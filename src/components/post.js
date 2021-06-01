import React from 'react'
import './post.css'



const Post = (props) => {
    console.log("props", props)

  return (
    <>
        <div className="link__card">
            <div className="post__img" style={{backgroundImage: props.value.img}}></div>
            <div className="link__description__box">
                <div className="link__description">{props.value.posttitle}</div>
                <div className="link__description__subtext">{props.value.posttitlesubtext}</div>
            </div>
        </div>
    </>
  )
}

export default Post