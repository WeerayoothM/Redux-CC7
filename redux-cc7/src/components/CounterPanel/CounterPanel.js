import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux'; //? connect คือ HOF ที่รีเทิร์นออกมาเป็น Higher Order Component
import { increment, addCounter, subtractCounter, decrement } from '../../store/action'

function CounterPanel({ onIncrementCounter, onDecrementCounter, onAddCounter, onSubtractCounter }) {
    const [inputValue, setInputValue] = useState("")
    return (
        <>
            <div>
                <Button type="primary" onClick={onIncrementCounter} style={{ margin: '20px' }}>INCREASE</Button>
                <Button type="danger" onClick={onDecrementCounter} style={{ margin: '20px' }}>DECREASE</Button>
                <Button type="primary" onClick={() => onAddCounter(inputValue)} style={{ margin: '20px' }}>ADD</Button>
                <Button type="danger" onClick={() => onSubtractCounter(inputValue)} style={{ margin: '20px' }}>SUBTRACT</Button>
            </div>
            <div style={{ width: '50%', margin: '0 auto' }}>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter value to add or subtract" />
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: (inputValue) => dispatch(addCounter(inputValue)),
        onSubtractCounter: (inputValue) => dispatch(subtractCounter(inputValue)),
    }
}

export default connect(null, mapDispatchToProps)(CounterPanel);
//* connect(props,dispatch)