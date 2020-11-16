import React from 'react';

let list = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {

        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};


function RecursiveList(props) {
    let result = [];
    console.log(props.data)
    for (let key in props.data) {
        if (Object.keys(props.data[key]).length === 0) {
            console.log('1', key, result)
            result.push(
                <li>{key}</li>
            )
        } else {
            console.log('2', key, result)
            result.push(
                <li>
                    <li>{key}</li>
                    <ul>
                        <RecursiveList data={props.data[key]} />
                    </ul>
                </li>
            )
        }
    }
    return result;

}

function ListObj() {
    return (
        <div>
            <ul><RecursiveList data={list} /></ul>
        </div>
    )
}

export default ListObj
