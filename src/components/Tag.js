import React, { useState}  from 'react'
import './Tag.css'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';



function Tag() {
     
   const [tag, setTag] = useState('cat');

   const {gif, loading, fetchData} = useGif(tag);

   

  return (
    <div className="container">
      <p>Random {tag} Gif</p>
      {loading ? <Spinner/> :  <img src={gif} alt="gif" width={450} />}
      
       <input 
       className='input-container'
       type="text"
       name='tag'
       autoComplete='tag'
       id='tag'
       value={tag}
       onChange={(event) => setTag(event.target.value)} /> 
      <button className="btn" onClick={()=> fetchData()} >Generate</button>
    </div>
  )
}

export default Tag
