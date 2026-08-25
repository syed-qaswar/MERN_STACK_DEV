import { useState } from "react";
import { Camera, Home, HomeIcon, Rocket, ToolCaseIcon} from 'lucide-react';
import Card from "./components/Card";



function App(){
    // let text = 'Hi reactjs'
    // function changeText(val){
    //   text = 'changing the text'
    // }

    //-- using hooks
    // let [text, changeText] = useState('Hi Reactjs')
    let [count, setCount] = useState(0)
    let [dark, setDark] = useState(false)
  
  return(
    <div className={dark ? 'bg-black text-white' : 'bg-white text-black' }>
      {/* <h1 className="font-bold">{text}</h1> */}
      {/* <button className="bg-amber-400 p-2 rounded-lg" onClick={changeText}>Change Text</button> */}

      {/* to change text */}
      {/* <button className="bg-amber-400 p-2 rounded-lg" 
      onClick={() => changeText('Value changed by useState')}>
        Change Text
      </button> */}

      {/* for the counter */}
      <button className="bg-amber-400 p-2 rounded-lg" 
      onClick={() => setCount(count + 1)}>
        count {count}
      </button>


      {/* changing the style */}
      <button className="bg-amber-400 p-2 rounded-lg" 
      onClick={() => setDark(!dark)}>
        Toggle Dark mode
      </button>

      <Camera size={50} color="blue" strokeWidth={2} fill="yellow" />
      <HomeIcon />
      <Rocket />
      <ToolCaseIcon />


      <Card title='Card title' desc='Card Description'/>
    </div>
  )
}
export default App;