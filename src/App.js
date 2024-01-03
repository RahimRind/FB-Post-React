// import logo from './logo.svg';
import './App.css';
import { useEffect , useState } from 'react';
// import Homepage from './Views/HomePage';


function App() {
const [postsData, setPostsData] = useState([]);

// useEffect(function(){
//   getApiData()
// },[])
useEffect(()=>{
  getApiData()
},[])

const getApiData = ()=>{
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then( res => setPostsData(res.products));
  // .then( res => console.log(res.products))
}


  return (
    <div className="App">
      <header className="App-header">

      <div className='main '>
    <div className='flex justify-start items-center'>
      
        <img className='w-9 rounded-full mr-3' src="https://clipart-library.com/images/pTodqMqAc.jpg" alt="fb-image" />
    
      <div className=''>
        <h1 className='font-semibold mt-2 text-lg'>{postsData[0].title}</h1>
        <p className='mb-2'>Sponsored</p>
      </div>

    </div>
      <div className='justify-center  items-center'>
        <h1 className='font-medium'>{postsData[0].description}</h1>
      </div>

  </div>



{postsData.map((items)=>{
  return(
  <> 
{/* {items.title}  */}
</>
)
})}

        

        
      </header>
    </div>
  );
}

export default App;
