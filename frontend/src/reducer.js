function reducer (state = {citys : [], weatherData : [], favList : []}, action){
    switch(action.type){  

        case "LOADAPP" :
            return {...state, citys : action.payload}

        case "WEATHERDATA" :
            return {...state, weatherData : action.payload}

        case "ADDFAV" :
            return {...state, favList : [...state.favList, action.payload]}


        default: 
            return state
    }
}

export default reducer;