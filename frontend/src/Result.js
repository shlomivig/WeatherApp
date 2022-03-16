import './App.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ResultComp() {

  // Data  
  const navigate = useNavigate()
  const storeData = useSelector(state => state.weatherData)  
  const favStoreData = useSelector(state => state.favList)  
  const [currentTime, setCurrentTime] = useState("")
  const [isFav, setIsFav] = useState(false)
  const dispatch = useDispatch()
  
  // Functions 
  useEffect(async()=>{

    // Set Time
    var today = new Date()
    let time = today.getHours() + ':' + today.getMinutes();
    setCurrentTime(time)    
    
    let isFav = favStoreData.find(x=>x === storeData.request.query)
    if(isFav != undefined){
      setIsFav(true)
    }
    
  }, [])

  const goBack = ()=>{
    navigate("/")
  }

  const addToFav = ()=>{
    if(isFav){
      setIsFav(false)      
    }else{
      setIsFav(!isFav)
      let isExist = favStoreData.find(x=>x === storeData.request.query)
      if(isExist == undefined){
        setIsFav(true)        
        dispatch({type : "ADDFAV", payload : storeData.request.query})
      }
    }    
  }


  return (
    <div className="box-1">   

        <div className="container-fluid">
          <div className="row justify-content-center">
              <div className="col-12 col-md-4 col-sm-12 col-xs-12">
                  <div className="card p-4">
                      <div className="d-flex">
                        <img onClick={addToFav} width="30px" src={isFav ? 'https://icons-for-free.com/iconfiles/png/512/favorites+favourite+like+love+star+icon-1320161377492446548.png' : 'https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png'} /><br/>  
                          <h6 className="flex-grow-1">{storeData.request.query}</h6>
                          <h6>{currentTime}</h6>
                      </div>
                      <div className="d-flex flex-column temp mt-5 mb-3">
                          <h1 className="mb-0 font-weight-bold" id="heading"> {storeData.current.temperature}° C </h1> <span className="small grey">{storeData.current.weather_descriptions}</span>
                      </div>
                      <div className="d-flex">
                          <div className="temp-details flex-grow-1">
                              <p className="my-1"> <img src="https://i.imgur.com/B9kqOzp.png" height="17px"/> <span> {storeData.current.wind_speed} km/h </span> </p>
                              <p className="my-1"> <i className="fa fa-tint mr-2" aria-hidden="true"></i> <span> {storeData.current.cloudcover}% </span> </p>
                              <p className="my-1"> <img src="https://i.imgur.com/wGSJ8C5.png" height="17px"/> <span>{storeData.current.visibility}h </span> </p>
                          </div>
                          <div> <img src={storeData.current.weather_icons} width="100px"/> </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <input type="button" value="Back" onClick={goBack} />

    </div>
  );
}

export default ResultComp;