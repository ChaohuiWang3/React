import React from 'react';
import style from './top.module.scss';

import poe from './image/poe.png';
import chatgpt from './image/chatgpt.png';
import chatgpt_arrow from './image/chatgpt_arrow.png';
import share from './image/share.png';

function Top(){
    const items = [
        {id: 1, images: [poe], text: 'Poe'},
        {id: 2, images: [chatgpt,chatgpt_arrow], text: 'ChatGPT'},
        {id: 3, images: [share], text: 'Share'},
    ]

    return(
        <div className={style.cover}>
            {items.map(item => (
                <div key={item.id} className={style.list}>
                    {item.images.map((image, index) => (
                        <img key={index} src={image} alt={item.text}/>
                    ))}
                    <span>{item.text}</span>
                </div>
            ))}
        </div>  
    )
}

export default Top;