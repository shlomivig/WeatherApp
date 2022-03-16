import './App.css';
import MainpageComp from './Mainpage';
import {Route, Routes} from 'react-router-dom'
import ResultComp from './Result';
import Utils from './Utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {

  // Data
  const dispatch = useDispatch()

  // Functions
  useEffect(async()=>{

    let resp = await Utils.postData("http://localhost:8000/city", {"country": "israel"})
    dispatch({type : "LOADAPP", payload : resp.data})

  }, [])

  return (
    <div className="App">

      <Routes>
        <Route path="/"             element={<MainpageComp />} />  
        <Route path="/weather"      element={<ResultComp />} />  
      </Routes> 
      
    </div>
  );
}

export default App;