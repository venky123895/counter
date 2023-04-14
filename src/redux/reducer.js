const intialData={
    count:0
}
export const increamentReducer=(state=intialData,action)=>{
    switch (action.type) {
        case "INCREAMENT":
            
            return {...state,count:state.count+1}
        case "DECREAMENT":
            return {...state,count:state.count-1}

        case "RESET":
            return {...state,count:0}

        default:
            return state
    }
}