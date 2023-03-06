import "./App.css";
import Temperature from "./temperature.png";
import VOC from "./VOC.png";
import humidity from "./humidity.png";
import CO2 from "./CO2.png"
import Side from './Sidebox.js';
import { useEffect, useState } from "react";
import Graph from "./Graph.js";
import Dropdown from "./dropdown.js";
// import Form from "./Login.js";
let { data } = require("./Database.json")
function App() {
 
 const [count,setData] = useState(0)
//  setInterval(()=>{
//      setData((count+1)%(data.length));
//  },5000);
 useEffect(() => {
    const interval = setInterval(()=> {
      if((count+1)<data.length){
        setData(count+1);
      }
      else{
        setData(0);
      }
    },5000);
    return()=>{
      clearInterval(interval);
    };
 },[count])
  return (
    <div className="App">
      <Side />
      <header className="App-header">
      <div className="flex-box">
      <div className='temp'>
        <Dropdown/>
          <img className='image' src={Temperature}></img>
          <h1 className='hdg'>{data[Math.floor(count)].temp}</h1>
          <h2 className="down">Temperature</h2>
        </div>
        <div className='temp'>
        <Dropdown/>
          <img className='image'src={humidity}></img>
          <h1 className='hdg'>{data[Math.floor(count)].humi}</h1>
          <h2 className="down">Humidity</h2>
        </div>
        <div className='temp'>
        <Dropdown/>
          <img className='image'src={CO2}></img>
          <h1 className='hdg'>{data[Math.floor(count)].CO2}</h1>
          <h2 className="down">CO2</h2>
        </div>
        <div className='temp'>
        <Dropdown/>
          <img className='image' src={VOC}></img>
          <h1 className='hdg'>{data[Math.floor(count)].VOC}</h1>
          <h2 className="down">VOC</h2>
        </div>
      </div>
    </header>
    <Graph/>
  </div>
  );
}

export default App;