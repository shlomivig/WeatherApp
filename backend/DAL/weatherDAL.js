const axios = require("axios")

exports.getWeatherData = async(city)=>{

    const access_key = "da81a67c0de3076aa88dd998584ee868" 
    const url = "http://api.weatherstack.com/forecast?access_key=" + access_key + "&query=" + city;

    return await axios.get(url)  
}   