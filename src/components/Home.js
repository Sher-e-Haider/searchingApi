import axios from 'axios'
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { countries } from '../api/api';
import AppBar from '../appbar/Appbar'

import { InputBase } from '@material-ui/core';
import Card from './Card';

function Home(props) {
  const [countriesData,setCountriesData] = useState([])
  const [input,setInput] = useState('')
  const [put,setPut] = useState('')
  const [ran,setRan] = useState(0)
  console.log(countriesData,'putttt');
  
  useEffect(()=>{
    const p  = Math.floor(Math.random() * countriesData.length-10)
    if(p<0){
    	   setRan((countriesData.slice(-p,10-p))) 
          
    }else{
    	 setRan((countriesData.slice(p,10+p)))
    }
   
  },[countriesData,input])
   
  useEffect(()=>{
   const fetchCountries=async()=>{
  
   setCountriesData( await countries())
   }
   fetchCountries()
  },[])
   
  
  return (
    <div>
    <AppBar setInput={setInput} input={input} />
      <div className="header">
        write 'countries' for randomly max 10 datas. <br /> country name for a country 
      </div>
     { input==='countries'?(
         ran.map((x,i)=>(
       <Card x={x} key={i} />
      ))
     ):countriesData.filter((val)=>{
    if(input===""){
      return val
    }else if(val.name.toLowerCase().includes(input.toLowerCase())){
      return val
    }
  })?.length===0?(<div className='crd' >WARN: there is no such result to find that</div> ) :(
     countriesData.filter((val)=>{
    if(input===""){
      return val
    }else if(val.name.toLowerCase().includes(input.toLowerCase())){
      return val
    }
  }).map((x,i)=>(
       <Card x={x} key={i} />
      )))
     
      
     }
    
    </div>
   
  );
}

export default Home;

{/* <Link to={`/single/${x}`}> <AirplanemodeActiveIcon/></Link> */}





// countriesData.filter((val)=>{
//     if(input===""){
//       return val
//     }else if(val.name.toLowerCase().includes(input.toLowerCase())){
//       return val
//     }
//   })?.length===0?(<div className='crd' >WARN: there is no such result to find that</div> ) :(
//      countriesData.filter((val)=>{
//     if(input===""){
//       return val
//     }else if(val.name.toLowerCase().includes(input.toLowerCase())){
//       return val
//     }
//   })