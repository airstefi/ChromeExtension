import { useState, useEffect } from 'react'
import './App.css'

function App() {
  //const for images + timer + counter for randomizer + loading state
  const [image, setImage] = useState(null);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchImage = async () => {

    try{
      //turn loading on until image is fetched
      setLoading(true);
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
    //finnlly keyword used when all functions are finished to turn off loading
    finally{
      setLoading(false); 
    }

  }

  //loads image first immediatly when extension opens
   useEffect(() => {
    fetchImage();
  }, []);

  
  return (
    <>
    <h1> Image Generator</h1>
    <button onClick={fetchImage}>New Image</button>

    {!loading && image ? (
      <div>
         <img src={image} alt="Random" />
         <p>Last Image Fetched at: {time}</p>
      </div>
    ): (
     <p>Loading Image...</p>
    )}

    </>
  )
}

export default App
