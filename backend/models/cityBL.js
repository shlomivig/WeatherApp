const res = require('express/lib/response')
const cityDAL = require('../DAL/cityDAL')


exports.getCitysByCountry = async(obj)=>{
    
    let resp =  await cityDAL.getCitysByCountry(obj)
    return resp.data
}