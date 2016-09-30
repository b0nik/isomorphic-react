const initialState={
    text:"Аноним"
};

export default function (state=initialState,action) {
    switch (action.type){
        case "CHANGE_TEXT":
            const txt=action.payload;
            if(txt.length===0){
                return initialState;
            }
            return {text:action.payload};
        default:
            return state
    }
}