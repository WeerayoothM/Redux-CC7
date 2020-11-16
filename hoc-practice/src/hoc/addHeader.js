import React from 'react'

function ohmSort(arr) {
    for (let i; i < arr.length; i++) {
        for (let j; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

function addHeader(WrappedComponent, name) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <WrappedComponent ohmSort={ohmSort} />
                    <h1 style={{ fontSize: '20px', fontFamily: 'san' }}>Created by {name}</h1>
                </>
            )
        }
    }
}

export default addHeader;