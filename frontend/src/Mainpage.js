import './App.css';
import { useEffect, useState } from 'react';
import Utils from './Utils';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ResultComp from './Result';

function MainpageComp() {

  // Data  
  const [chooseFav, setChooseFav] = useState("")  
  const navigate = useNavigate()
  const [cityList, setCityList] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const storeData = useSelector(state => state.citys)  
  const favStoreData = useSelector(state => state.favList)  
  const dispatch = useDispatch()

  // Functions
  const searchCity = (e)=>{
    setIsSearch(true)
    setCityList(storeData.data)
    setCityList(storeData.data
    .filter(x => x.toLowerCase().includes(e.target.value.toLowerCase())))    
  }

  const getWeatherData = async(city)=>{
    setIsSearch(false)
    let resp = await Utils.postData("http://localhost:8000/weather", {place : city})    
    await dispatch({type : "WEATHERDATA", payload : resp.data})
    navigate("/weather")
  } 

  const showWeather = async(city)=>{    
    setIsSearch(false)
    let resp = await Utils.postData("http://localhost:8000/weather", {place : city})    
    await dispatch({type : "WEATHERDATA", payload : resp.data})
    if(city){
      navigate("/weather")
    }
  }


  return (
    <div className="MainPage">  
    
    <h1>Weather in israel</h1>
    <input type="text" placeholder='Search city names' onChange={searchCity}/><br/>
    
		<ul>
      {
        isSearch && cityList.map((item, index)=>{
          return<li key={index} onClick={()=>{ 
            getWeatherData(item)
          }}>{item}</li>
        })
      }
     </ul>  

     {
      favStoreData.length >= 1 && <div><select onChange={(e)=>{
        setChooseFav(e.target.value)}
        }>
        
        {
          favStoreData.map((item, index)=>{
            return<option key={index}>{index + 1}. {item}</option>
          })
        }
      </select>
      
        <input type="button" value="Show Weather" onClick={()=>showWeather(chooseFav)}/>
        </div>
     }
     
    </div>
  );
}

export default MainpageComp;