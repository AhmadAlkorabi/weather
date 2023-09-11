import axios from 'axios'
import { useState,useEffect } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import SearchBox from './components/SearchBox'
function App() {
const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bf1ac883ecd7a3f9b3fdb8e940226e01`
  
  const searchLocation = (e)=>{
    if(e.key === 'Enter'){ 
      axios.get(url).then((res)=>{
        setData(res.data)
        console.log(res.data)
      })
    }
  }
  return (
    <div className='app'>
    <SearchBox location={location} setLocation={setLocation} searchLocation={searchLocation}/>
    <Main data={data}/>
    <Footer data={data}/>
    </div>
  );
}

export default App;
