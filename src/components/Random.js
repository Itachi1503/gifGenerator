import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
import './Random.css'




function Random() {
     
    
    const {gif, loading, fetchData} = useGif();

    

  return (
    <div className="container">
      <p>Random Gif</p>

      {loading ? <Spinner/> : <img src={gif} alt="gif" width={450} /> }
        
      <button className="btn" onClick={()=> fetchData()} >Generate</button>
    </div>
  )
}

export default Random
