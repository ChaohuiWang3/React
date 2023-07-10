import React, { Component } from 'react';
import background from './scene/background.module.scss';
import toppart from './scene/toppart.module.scss';
import leftpart from './scene/leftpart.module.scss';
import midpart from './scene/midpart.module.scss';

//输入图片
import poe from './image/poe.png';
import chatgpt from './image/chatgpt.png';
import chatgpt_arrow from './image/chatgpt_arrow.png';
import explore from './image/explore.png';
import explore_arrow from './image/explore_arrow.png';
import create_bot from './image/create_bot.png';
import create_bot_plus from './image/create_bot_plus.png';
import sage from './image/sage.png';
import gpt4 from './image/gpt4.png';
import claude from './image/claude.png';
import claude_instnat_100k from './image/claude_instnat_100k.png';
import claude_instant from './image/claude_instant.png';
import left_chatgpt from './image/left_chatgpt.png';
import google_palm from './image/google_palm.png';
import subscribe from './image/subscribe.png';
import profile from './image/profile.png';
import settings from './image/settings.png';
import send_feedback from './image/send_feedback.png';
import share from './image/share.png';
import clear_context from './image/clear_context.png';
import voice from './image/voice.png';
import input_button from './image/input_button.png';

class App extends Component {
   render() {
    return(  
      <div className={background.background}>         {/*背景*/}

        {/*顶端模块*/}
        <div className={toppart.topcover}>            {/*顶端遮罩*/} 
          <div className={toppart.poe}>        {/*左上角poe模块*/}
            <span>Poe</span>
            <img src={poe} alt="poe"/>
          </div>

          <div className={toppart.chatgpt}>    {/*正上方chatgpt模块*/}
            <img src={chatgpt} alt="chatgpt"/>
            <span>ChatGPT</span>
            <img src={chatgpt_arrow} alt="chatgpt_arrow"/>
          </div> 

          <div className={toppart.share}>    {/*正上方share模块*/}
            <img src={share} alt="share"/>
            <span>Share</span>
          </div> 
        </div>
     
      
        {/*左侧模块*/}
        <div className={leftpart.leftcover}>          {/*左侧遮罩*/}
          <div className={leftpart.explore}>   {/*左侧explore模块*/}
            <img src={explore} alt="explore"/>    
            <span>Explore</span>
            <img src={explore_arrow} alt="explore_arrow"/>  
          </div>

          <div className={leftpart.create_bot}> {/*左侧create_bot模块*/}
            <img src={create_bot} alt="create_bot"/>
            <span>Create bot</span>
            <img src={create_bot_plus} alt="create_bot_plus"/>
          </div>

          <div className={leftpart.sage}>  {/*左侧sage模块*/}
            <img src={sage} alt="sage"/>
            <span>Sage</span> 
          </div>

          <div className={leftpart.gpt4}>  {/*左侧列表gpt4模块*/}
            <img src={gpt4} alt="gpt4"/>
            <first-span>GPT-4</first-span>
            <second-span>Limited access</second-span>
          </div>

        
          <div className={leftpart.claude}>  {/*左侧列表claude+模块*/}
            <img src={claude} alt="claude"/>
            <first-span>Claude+</first-span>
            <second-span>Limited access</second-span>
          </div>

          <div className={leftpart.claude_instant_100k}>  {/*左侧列表claude_instant_100k模块*/}
            <img src={claude_instnat_100k} alt="claude_instnat_100k"/>
            <first-span>Claude-instant-100k</first-span>
            <second-span>Limited access</second-span>
          </div>

          <div className={leftpart.claude_instant}>  {/*左侧列表claude_instant模块*/}
            <img src={claude_instant} alt="claude_instnat"/>
            <span>Claude-instant</span>
          </div>

          <div className={leftpart.chatgpt}>  {/*左侧列表chatgpt模块*/}
            <img src={left_chatgpt} alt="chatgpt"/>
            <span>ChatGPT</span>
          </div>

          <div className={leftpart.google_palm}>  {/*左侧列表google_palm模块*/}
            <img src={google_palm} alt="google_palm"/>
            <span>Google-PaLM</span>
          </div>

          <div className={leftpart.subscribe}>  {/*左侧列表subscribe模块*/}
            <img src={subscribe} alt="subscribe"/>
            <span>Subscribe</span>
          </div>

          <div className={leftpart.profile}>  {/*左侧列表profile模块*/}
            <img src={profile} alt="profile"/>
            <span>Profile</span>
          </div>

          <div className={leftpart.settings}>  {/*左侧列表setting模块*/}
            <img src={settings} alt="settings"/>
            <span>Settings</span>
          </div>

          <div className={leftpart.send_feedback}>  {/*左侧列表send_feedback模块*/}
            <img src={send_feedback} alt="send_feedback"/>
            <span>Send Feedback</span>
          </div>

          <div className={leftpart.download_space}>    {/*左侧列表下载空间*/}
            <button className={leftpart.download_ios_app}>   {/*左侧列表下载空间内download_ios_app模块*/}
              <span>Download iOS app</span>
            </button>
          </div>

          <div className={leftpart.scroll_bar_space}>  {/*左侧列表滚动条空间*/}
            <div className={leftpart.scroll_bar}></div>    {/*左侧列表滚动条模块*/}
          </div>
        </div>


        {/*输入模块*/}
        <img className={midpart.clear_context} src={clear_context} alt="clear_context"/> {/*清除按钮*/}

        <div className={midpart.input}>   {/*输入框*/}
          <span>Talk to ChatGPT on Poe</span>
        </div>   

        <img className={midpart.voice} src={voice} alt='voice'/>   {/*语音*/}

        <div className={midpart.input_button}>     {/*输入按钮*/}
          <img src={input_button} alt="input_button"/>
        </div>
      </div>   
    )
  }
} 

export default App 
