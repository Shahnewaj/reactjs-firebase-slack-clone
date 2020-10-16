export const initialState = {
    // user :"imran" 
    user :null 


}

export const actionTyes = {
    SET_USER : "SET_USER"
};


const reducer = (state , action ) =>{
    console.log(action);

    switch(action.type){
        case actionTyes.SET_USER:
            return{
                ...state ,
                user : action.user
            }
        default :
            return state ;   
    }
}

export default reducer ;