import { Col, Row } from 'antd'
import React, { useState } from 'react'
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay'
import CounterPanel from '../../components/CounterPanel/CounterPanel'
import ResultList from '../ResultList/ResultList'

function Counter() {
    // const [counter, setCounter] = useState(0);

    return (
        <Row justify="center">
            <Col span={9}>
                <h1>Welcome to my counter. By Ohm</h1>
                <CounterDisplay />
                <CounterPanel />
            </Col>
            <Col span={9}>
                <ResultList />
            </Col>
        </Row>
    )
}

export default Counter
