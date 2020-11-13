import { uniqueId } from 'lodash'
import { DELETE_RECORD, RECORD, ADD_SPECIAL_RESULT } from '../action';

const initialState = {
    resultList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECORD:
            const ieie = [...state.resultList];
            ieie.push({ id: uniqueId(), result: action.value });
            return { ...state, resultList: ieie };
        case DELETE_RECORD:
            const sus = [...state.resultList];
            return { ...state, resultList: sus.filter((result) => result.id !== action.id) };
        case ADD_SPECIAL_RESULT:
            return {
                ...state,
                resultList: [...action.spcRL, ...state.resultList]
            };
        default:
            return state;
    }
}


export default reducer;