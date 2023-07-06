import React, { Component } from 'react';
import backgroundstyle from './background.module.scss';
import poe from './poe.png'
import chatgpt from './chatgpt.png'
console.log(poe, chatgpt);

class App extends Component {
   render() {
    return(
      <div className={backgroundstyle.background}>   {/*背景*/}
        <div className={backgroundstyle.topcover}>    {/*顶端遮罩*/}
          <div className={backgroundstyle.poe_img}> <img src={poe} alt = "poe logo"/> </div> {/*poe顶端logo图片*/}
          <div className={backgroundstyle.poe_title}>Poe</div>  {/*poe标题*/}
          <div className={backgroundstyle.chatgpt_img}> <img src={chatgpt} alt = "chatgpt logo"/> </div> {/*chatgpt顶端logo图片*/} 
          <div className={backgroundstyle.chatgpt_title}>ChatGPT</div>  {/*chatgpt标题*/}
        </div>

        
        <div className={backgroundstyle.leftcover}> {/*左侧遮罩*/}
          <div className={backgroundstyle.explore_title}>Explore</div>
        </div>
      </div>
      
      
    )
  }
} 

export default App 
