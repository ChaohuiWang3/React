import {useState} from 'react';
import midpart from './scene/midpart.module.scss';

const Input = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleChange = event => {
    setInput(event.target.value)        //输入框采集内容
  } 

  const handleDown = event => {
    if (event.key === 'Enter') {
      console.log(input)       //将输入框内容加载到控制台          {/*显示控制台分配给output的内容*/}
      setOutput(input)      //将控制台内容分配给output
      setInput('')          //清空输入框
    }
  }

  return (
    <div>
      <input
        type="text"
        value={input} 
        onChange={handleChange}
        onKeyDown={handleDown}
        className={midpart.input}/>

      {output !=='' &&                                       //有内容分配给output
        <div className={midpart.output}>                    
          <span>{output}</span>                              {/*输出控制台分配的内容*/}
        </div>       
      }
    </div>
  );
  
};

export default Input;