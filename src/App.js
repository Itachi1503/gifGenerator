
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
import Emoji from './Assets/emoji.png'

function App() {
  return (
    <div className="App">
      <div className='emoji-container'>
      <img  className="emoji" src={Emoji} alt="Emoji" loading='lazy'  />
      </div>

      <div className='emoji-container-2'>
      <img  className="emoji" src={Emoji} alt="Emoji" loading='lazy'  />
      </div>
     
      <div className='heading'>
      <h1>Random Gifs</h1>
      </div>
       
       <div className='content-container'>
        <Random/>
        <Tag/>
       </div>

    </div>
  );
}

export default App;
