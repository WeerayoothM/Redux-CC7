const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter1: 0,
    counter2: 0,
    name: ""
}

//* REDUCERS
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE_COUNTER":
            return { ...state, [action.where]: state[action.where] + 1 }
        case "DECREASE_COUNTER":
            return { ...state, [action.where]: state[action.where] - 1 }
        case "ADD_COUNTER":
            return {
                ...state,
                counter1: state.counter1 + action.value.counter1,
                counter2: state.counter2 + action.value.counter2
            }
        case "RESET_COUNTER":
            return { ...state, counter1: 0 }
        case "SET_NAME":
            return { ...state, name: action.value }
        case "DELETE_NAME":
            return { ...state, name: "" }
        default:
            return state;
    }
}


//* STORE
const store = createStore(rootReducer);   //! ตอน create store ต้องกำหนด reducer ด้วย
console.log(store.getState());

//* SUBSCRIPTION
store.subscribe(() => {
    console.log("[subscription]", store.getState());
});

//* DISPATCHES ACTION  คือ Object มี key & value และต้องมี key type เสมอ
store.dispatch({ type: 'INCREASE_COUNTER', where: "counter1" });
store.dispatch({ type: 'INCREASE_COUNTER', where: "counter2" });
store.dispatch({ type: 'ADD_COUNTER', value: { counter1: 10, counter2: 5 } });
store.dispatch({ type: 'DECREASE_COUNTER', where: "counter1" });
store.dispatch({ type: 'DECREASE_COUNTER', where: "counter2" });
store.dispatch({ type: 'RESET_COUNTER' });
store.dispatch({ type: 'SET_NAME', value: 'Ohm' });
store.dispatch({ type: 'SET_NAME', value: 'Sonter' });
store.dispatch({ type: 'DELETE_NAME' });
console.log(store.getState())

