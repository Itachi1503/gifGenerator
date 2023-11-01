import { useEffect, useState}  from 'react'
import axios from 'axios';



const API_KEY = process.env.local.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false)
   
    
    const fetchData = async(tag)=> {
       setLoading(true)
       const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
       const imageSource = data.data.images.downsized.url;
       setGif(imageSource);
       setLoading(false);
       
   }
  

   useEffect(()=> {
      fetchData('naruto');
   }, []);


   return {gif, loading, fetchData};
}

export default useGif
