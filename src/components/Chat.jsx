import React from 'react'
import Add from '../img/add.png';
import More from '../img/more.png';
import Cam from '../img/cam.png';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={Cam} alt='' />
          <img src={Add} alt='' />
          <img src={More} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Chat