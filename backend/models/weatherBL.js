const weatherDAL = require('../DAL/weatherDAL')

exports.getWeatherData = async(city)=>{
    
    let resp =  await weatherDAL.getWeatherData(city)
    return resp.data
}