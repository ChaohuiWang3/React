import React from 'react';
import style from './left.module.scss';

import explore from './image/explore.png';
import explore_arrow from './image/explore_arrow.png';
import create_bot from './image/create_bot.png';
import create_bot_plus from './image/create_bot_plus.png';
import assistant from './image/assistant.png';
import claude_2_100k from './image/claude_2_100k.png';
import claude_instant_100k from './image/claude_instant_100k.png';
import gpt4 from './image/gpt4.png';
import claude_instant from './image/claude_instant.png';
import chatgpt from './image/chatgpt.png';
import chatgpt_16k from './image/chatgpt_16k.png';
import gpt_4_32k from './image/gpt_4_32k.png';
import google_palm from './image/google_palm.png';
import llama_2_70b from './image/llama_2_70b.png';
import all_your_bots from './image/all_your_bots.png';
import subscribe from './image/subscribe.png';
import profile from './image/profile.png';
import settings from './image/settings.png';
import send_feedback from './image/send_feedback.png';
import twitter from './image/twitter.png';

const LA = 'Limited access'

function Left(){
    const items = [
        {id: 1, images: [explore, explore_arrow], texts: ['Explore']},
        {id: 2, images: [create_bot, create_bot_plus], texts: ['Create bot']},
        {id: 3, images: [assistant], texts: ['Assistant']},
        {id: 4, images: [claude_2_100k], texts: ['Claude-2-100k', LA]},
        {id: 5, images: [claude_instant_100k], texts: ['Claude-instant-100k', LA]},
        {id: 6, images: [gpt4], texts: ['GPT-4', LA]},
        {id: 7, images: [claude_instant], texts: ['Claude-instant']},
        {id: 8, images: [chatgpt], texts: ['ChatGPT']},
        {id: 9, images: [chatgpt_16k], texts: ['ChatGPT-16k', LA]},
        {id: 10, images: [gpt_4_32k], texts: ['GPT-4-32k', LA]},
        {id: 11, images: [google_palm], texts: ['Google-PaLM']},
        {id: 12, images: [llama_2_70b], texts: ['Llama-2-70b']},
        {id: 13, images: [all_your_bots], texts: ['All your bots']},
        {id: 14, images: [subscribe], texts: ['Subscribe']},
        {id: 15, images: [profile], texts: ['Profile']},
        {id: 16, images: [settings], texts: ['Settings']},
        {id: 17, images: [send_feedback], texts: ['Send Feedback']},
        {id: 18, images: [], texts: ['Download iOS app']},
        {id: 19, images: [], texts: ['Download Android app']},
        {id: 20, images: [twitter], texts: ['Follow us on']},
    ]

    return(
        <div className={style.cover}>
            {items.map(item => (
                <div key={item.id} className={style.list}>
                    {item.images.map((image, index) => (
                        <img key={index} src={image} alt={item.texts}/>
                    ))}
                    {item.texts.map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </div>
            ))}
        </div>  
    )
}

export default Left