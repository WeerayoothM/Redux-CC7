import { uniqueId } from 'lodash'

const initialState = {
    counter: 0,
    resultList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 };
        case "ADD":
            return { ...state, counter: state.counter + action.value };
        case "SUBTRACT":
            return { ...state, counter: state.counter - action.value };
        case "RECORD":
            const ieie = [...state.resultList];
            ieie.push({ id: uniqueId(), result: action.value });
            return { ...state, resultList: ieie };
        case 'DELETE_RECORD':
            const sus = [...state.resultList];
            return { ...state, resultList: sus.filter((result) => result.id !== action.id) };


        default:
            return state;
    }
}


export default reducer;