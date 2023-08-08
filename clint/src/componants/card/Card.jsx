import React, { useState } from 'react'
import './Card.css'
import heart from '../../img/heart.svg'
import heartFilled from '../../img/heartFilled.png'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import info from '../../img/info.png'

const Card = ({post ,socket ,user}) => {
  const [liked ,setLiked] =useState(false);
  const handleNotification =(type)=>{
     type===1&&  setLiked(true);

    socket.emit("sendText",{
      senderName:user,
      receiverName:post.username,
      text:"hello this is chat message",
    })

  }
  return (
    <div className='card' >
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>

      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ?(<img src={heartFilled} alt="" className="cardIcon" />)
        :( <img src={heart} alt="" className="cardIcon"  onClick={()=> handleNotification(1)}/>)}
       
        <img src={comment} alt="" className="cardIcon" onClick={()=> handleNotification(2)} />
        <img src={share} alt="" className="cardIcon" onClick={()=> handleNotification(3)}/>
        <img src={info} alt="" className="cardIcon infoIcons" />
      </div>






    </div>
  )
}

export default Card