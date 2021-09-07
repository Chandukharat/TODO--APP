

export const Update = (state = [], action) => {
   switch (action.type){
       case "change" :
       return state = [...state , action.payload] ;

       case "ckk" :
        let c =state.filter((item , i)=>{return (i !== action.payload.ind)})
        state.value = c 
        return state = c

       default :
       return state
   }
}



