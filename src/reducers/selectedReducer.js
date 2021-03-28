const initial ={
    title: "",
    description: "",
    userId: null,
    id: null
}
export default (state = initial, action)=>{
switch(action.type){
    case 'SELECTED_STREAM':
       
        return { ...state, title: action.payload.title, 
            description: action.payload.description,
            userId:action.payload.userId,
               id:action.payload.id };
      default:
        return state;
}
};