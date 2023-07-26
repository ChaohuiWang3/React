import {useState} from 'react';
import midpart from './scene/midpart.module.scss';
import clear_text from './image/clear_text.png';
import input_button from './image/input_button.png';

const Input = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  const handleChange = event => {
    setInput(event.target.value)        //输入框采集文本
  } 

  const handleEnterInput = event => {     //用回车键将输入框文本导入输出框
    if (event.key==='Enter' && input !=='') {          
      setOutput([...output, input]) 
        
      if (output.length >= 5){                  //当文本数量超过一定量时，删除第一个文本并加入最新文本
        setOutput([...output.slice(1), input])    
      }
      setInput('')          //清空输入框
    }
  }

  const handleImageInput = () => {       //用输入按钮将输入框文本导入输出框
    if (input !=='') {
      setOutput([...output, input]) 
      
      if (output.length >= 5){
        setOutput([...output.slice(1), input])
      }
      setInput('')
    }
  }


  const handleClear = () => {     //清空输出框
    setOutput([])     
  }

  return (
    <div>
      <div className={midpart.input_button} onClick={handleImageInput}>    
        <img src={input_button} alt="input_button"/>
      </div>

      <input                 //输入框
        type="text"
        id='input'
        value={input} 
        onChange={handleChange}   
        onKeyDown={handleEnterInput}
        className={midpart.input}/>

      <img className={midpart.clear_text} src={clear_text} alt='clear_text' onClick={handleClear}/>    

      {output
        .filter((output) => output !== '')     //如果输入为空不显示
        .map((output, index) => (
          <div className={midpart.output_container}>          {/*所有输出框右对齐*/}
            <div className={midpart.output} key={index}>     {/*遍历此时输出框的所有文本*/}
              <span>{output}</span>
            </div>
      
          </div>
      ))}
    </div>
  ); 
};

export default Input;


