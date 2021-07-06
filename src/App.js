import './App.css';
import Menus from './components/Menus'
import Button from './components/Button'
import React,{useState,useEffect} from 'react'
import axios from 'axios';

const url = 'https://asm-dev-api.herokuapp.com/api/v1/food'


function App() {
  const [loading, setloading] = useState(true)
  const [foodMenu, setFoodMenu]= useState([])

  const GetMenu=async()=>{
    setloading(true)
    await axios.get(url)
    .then((res)=>{
        setFoodMenu(res.data.data.meals)
    })
    .catch((error)=>{
      console.log(error)
      setloading(false)
    })
    .finally(()=>{
      setloading(false)
    })
  }

  console.log(foodMenu)

  useEffect(()=>{
    GetMenu()
  },[])




  return (
    <div className="app">
        <Menus foodMenu={foodMenu} loading={loading}/>
        <Button loading={loading}/>
    </div>
  );
}
export default App;
