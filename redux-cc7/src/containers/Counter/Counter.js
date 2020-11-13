import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd'
import React, { useState } from 'react'
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay'
import CounterPanel from '../../components/CounterPanel/CounterPanel'
import ResultList from '../ResultList/ResultList';
import './Counter.css';
import { connect } from 'react-redux';
import { addSpecialResult } from '../../store/action'

function Counter({ onAddSpecial }) {
    const [isShowCounter, setIsShowCounter] = useState(true);
    const [isShowResultList, setIsShowResultList] = useState(true);

    return (
        <>
            <Row justify='center' style={{ margin: '0 auto', width: '100%', display: 'flex' }}>
                <Button onClick={() => setIsShowCounter(!isShowCounter)}> {!isShowCounter ? <CheckCircleOutlined style={{ color: 'cornflowerblue' }} /> : <CloseCircleOutlined style={{ color: 'salmon' }} />} Counter</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={() => setIsShowResultList(!isShowResultList)}> {!isShowResultList ? <CheckCircleOutlined style={{ color: 'cornflowerblue' }} /> : <CloseCircleOutlined style={{ color: 'salmon' }} />} Result List</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={() => onAddSpecial()}>Add Special Result</Button>
            </Row>
            <Row justify="center">
                <Col span={9}>
                    {isShowCounter &&
                        <>
                            <h1>Welcome to my counter. By Ohm</h1>
                            <CounterDisplay />
                            <CounterPanel />
                        </>}
                </Col>
                <Col span={9}>
                    {isShowResultList && <ResultList />}
                </Col>
            </Row>
        </>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddSpecial: () => dispatch(addSpecialResult())
    };
};

export default connect(null, mapDispatchToProps)(Counter)
