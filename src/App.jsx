import { useState } from 'react'
import './App.css'

function App() {
  //const for images + timer + counter for randomizer
  const [image, setImage] = useState(null);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(null);


  async function fetchImage () {

    try{
      //API initialization + counter used for randomness 
      const url_API = `https://picsum.photos/200?random=${count}`;
      setImage(url_API);
      setCount(prev=>prev+1); //increment the counter every time the button is clicked as well

      //get current time and convert it to readible text
      const time_now = new Date().toLocaleString();
      setTime(time_now);
    }

    catch(error){
      console.log("Error fetching image", error);

    }

  }

  
  return (
    <>
    <h1> Image Generator</h1>
    <button onClick={fetchImage}>New Image</button>

    {image && (
      <div>
         <img src={image} alt="Random" />
         <p>Last Image Fetched at: {time}</p>
      </div>
    )}

    </>
  )
}

export default App
