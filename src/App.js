// import logo from './logo.svg';
import './App.css';
import { useEffect , useState } from 'react';
import Homepage from './Views/HomePage';


function App() {
const [postsData, setPostsData] = useState([]);

useEffect(function(){
  getApiData()
},[])

const getApiData = ()=>{
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then( res => setPostsData(res.products))
}


  return (
    <div className="App">
      <header className="App-header">

{postsData.map((items)=>{
  return <Homepage/>
})}

        <h1>Hello World</h1>

        
      </header>
    </div>
  );
}

export default App;
