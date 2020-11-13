import axios from 'axios'

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const RECORD = "RECORD";
export const DELETE_RECORD = "DELETE_RECORD";
export const ADD_SPECIAL_RESULT = "ADD_SPECIAL_RESULT"

//* ACTION CREATORS
//? Function that returns an action

export function increment() {
    return { type: INCREMENT }
}
export function decrement() {
    return { type: DECREMENT }
}
export function addCounter(inputValue) {
    return { type: ADD, value: +inputValue }
}
export function subtractCounter(inputValue) {
    return { type: SUBTRACT, value: +inputValue }
}
export function record(counter) {
    return { type: RECORD, value: counter }
}
export function deleteRecord(id) {
    return { type: DELETE_RECORD, id: id }
}

/*
export function storeResult(value) {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 2000);
  };
}

function saveResult(value) {
  return { type: STORE_RESULT, counter: value };
}
*/

export function addSpecialResult() {
    return dispatch => {
        axios.get('https://run.mocky.io/v3/c4ef42da-f959-4b00-a0f3-00c11d853c86')
            .then(res =>
                dispatch(addSpecialResultActionCreator(res.data))
            ).catch(err => console.log(err))
    }
}
export function addSpecialResultActionCreator(spL) {
    return { type: ADD_SPECIAL_RESULT, spcRL: spL }
}
