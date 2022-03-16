import axios from 'axios'

const getData = async(url)=>{  
    return axios.get(url)
}

const postData = (url, obj)=>{
  return axios.post(url, obj)
}

const putData = (url, obj)=>{
  return axios.put(url, obj)
}

export default {getData, postData, putData};