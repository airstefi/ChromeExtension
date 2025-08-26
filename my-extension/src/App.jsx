import { useState } from 'react'
import './App.css'

function App() {
  //const for images and counter for randomizer
  const [image, setImage] = useState(null);
  const [count, setCount] = useState(0);

  const fetchImage = async () => {

    try{
      //API initialization + counter used for randomness 
    const url_API = `https://picsum.photos/200?random=${count}`;
      setImage(url_API);
      setCount(prev=>prev+1); //increment the counter every time the button is clicked as well
    }

    catch(error){
      console.log("Error fetching API", error);

    }

  }

  return (
    <>
    <h1> Image Generator</h1>
    <button onClick={fetchImage}>New Image</button>

    {image && (
      <div>
         <img src={image} alt="Random" />
      </div>
    )}

    </>
  )
}

export default App
