// import logo from './logo.svg';
import './App.css';
import { useEffect , useState } from 'react';
// import Homepage from './Views/HomePage';


function App() {
const [postsData, setPostsData] = useState([]);

useEffect(function(){
  getApiData()
},[])

const getApiData = ()=>{
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then( res => setPostsData(res.products))
  // .then( res => console.log(res.products))
}


  return (
    <div className="App">
      <header className="App-header">

      <div className='main'>
    <div className='flex justify-center  items-center'>
      
        <img className='w-9 rounded-full mr-3' src="https://clipart-library.com/images/pTodqMqAc.jpg" alt="" />
    
      <div className=''>
        <h1 className='font-semibold text-lg'>{postsData[0].title}</h1>
        <p>Sponsored</p>
      </div>

    </div>

  </div>



{postsData.map((items)=>{
  return(
  <> 
 
</>
)
})}

        

        
      </header>
    </div>
  );
}

export default App;
