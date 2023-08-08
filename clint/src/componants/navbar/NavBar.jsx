import React, { useEffect, useState } from 'react'
import './NavBar.css'
import notificataion from '../../img/notificataion.png'
import message from '../../img/message.png'
import settings from '../../img/settings.png'
import { Socket } from 'socket.io-client'

const NavBar = (socket) => {
  const[notifications ,setNotifications]=useState([]);
  const[open ,setOpen]=useState(false);

  useEffect(() => {
    socket.on("getText", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [Socket]);

  
  console.log(notifications)

  const displayNotification =({senderName ,text})=>{
    let action;
    // if(type===1){
    //   action="liked";
    // }
    // else if(type===2){
    //   action="Comment";
    // }
    // else{
    //   action="shared";
    // }
    return (
      <span className='notifications'>{`${senderName}:${text}`} </span>
    )

    

  }
  const handleRead=()=>{
    setNotifications([]);
    setOpen(false);
  }




  return (
    <div className='navbar'>
      <span className='logo'> logo</span>
      <div className='icons'>
        <div className='icon' onClick={()=>setOpen(!open)}>
          <img src={notificataion} alt="" className='iconImg' />
          <div className='counter'>{notifications.length}</div>
        </div>
        {/* icon 2 */}
        <div className='icon' onClick={()=>setOpen(!open)}>
          <img src={message} alt="" className='iconImg' />
        </div>
        {/* icon 3 */}

        <div className='icon'onClick={()=>setOpen(!open)} >
          <img src={settings} alt="" className='iconImg' />
        </div>
      </div>
      {open&&(

      <div className="notification">
        {
          notifications.map((n)=> displayNotification(n))
        }
        <button className='nButton' onClick={handleRead}>Mark as read</button>
      </div>
      )}
    </div>
  )
}

export default NavBar;