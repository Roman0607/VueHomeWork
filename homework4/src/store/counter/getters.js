export const getters={
    doubleCounter: state=>{
        return state.counter*2;
    },
    stringCounter:state=>{
        return state.counter+' -state';
    }
};