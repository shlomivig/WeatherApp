const axios = require("axios")

exports.getCitysByCountry = async(obj)=>{    
    return await axios.post("https://countriesnow.space/api/v0.1/countries/cities", obj)   
}   