import { List, Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import React from 'react';
import { connect } from 'react-redux';

function ResultList({ resultList, counter, onRecordCounter, onRecordDelete }) {
    return (
        <div style={{ width: '70%', margin: '0 auto' }}>
            <div style={{ margin: '20px' }}>
                <Button onClick={() => onRecordCounter(counter)} style={{ height: '50px', backgroundColor: "cornflowerblue", color: "white" }} ><SaveOutlined />RECORD</Button>
            </div>
            <List
                header={<span><strong>Record</strong></span>}
                bordered
                dataSource={resultList}
                renderItem={({ id, result }) => (
                    <List.Item key={id}>
                        {result}
                        <Button type='danger' onClick={() => onRecordDelete(id)}>Delete</Button>
                    </List.Item>
                )}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        resultList: state.resultList,
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRecordCounter: (counter) => dispatch({ type: "RECORD", value: counter }),
        onRecordDelete: (id) => dispatch({ type: "DELETE_RECORD", id: id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
