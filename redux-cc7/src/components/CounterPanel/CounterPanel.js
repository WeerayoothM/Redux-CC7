import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'; //? connect คือ HOF ที่รีเทิร์นออกมาเป็น Higher Order Component

function CounterPanel({ onIncrementCounter, onDecrementCounter, onAddCounter, onSubtractCounter }) {
    return (
        <>
            <div>
                <Button type="primary" onClick={onIncrementCounter} style={{ margin: '20px' }}>INCREASE</Button>
                <Button type="danger" onClick={onDecrementCounter} style={{ margin: '20px' }}>DECREASE</Button>
                <Button type="primary" onClick={onAddCounter} style={{ margin: '20px' }}>ADD</Button>
                <Button type="danger" onClick={onSubtractCounter} style={{ margin: '20px' }}>SUBTRACT</Button>
            </div>

        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddCounter: () => dispatch({ type: "ADD", value: +prompt('Enter value to add') }),
        onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: +prompt('Enter value to subtract') }),

    }
}

export default connect(null, mapDispatchToProps)(CounterPanel);
//* connect(props,dispatch)