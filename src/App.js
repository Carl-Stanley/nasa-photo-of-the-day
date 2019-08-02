import React, {useState,useEffect} from "react";
import "./App.css";
import Imagegetter from "./Components/ImageRenderer";
import axios from "axios";
import styled from 'styled-components';
// That fancy NASA Url.
let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'





function App() {
  
  const [data, setData] = useState([]);


  useEffect( () => {

     

    axios.get(url)
    .then( response => {

      //console.log(response)

      setData(response.data)

    }) // I hate you error.....
    .catch(error => console.log('Big fat errrrrrrror, AGAIN!', error))

  }, []);
  
  return (

    
    <div className="App">
        
        
        <Imagegetter 
       
       title={data.title}
       img={data.url}
       explanation = {data.explanation} 
       
       
       />
       
        
      
      
     
    </div>
    

  );
}

export default App;
