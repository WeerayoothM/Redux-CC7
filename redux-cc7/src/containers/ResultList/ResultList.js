import { List, Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import React from 'react';
import { connect } from 'react-redux';
import { RECORD, DELETE_RECORD, record, deleteRecord } from '../../store/action';

function ResultList({ resultList, counter, onRecordCounter, onRecordDelete }) {
    return (
        <div style={{ width: '70%', margin: '0 auto' }}>
            <div style={{ margin: '20px' }}>
                <Button onClick={() => onRecordCounter(counter)} style={{ height: '40px', backgroundColor: "cornflowerblue", color: "white" }} ><SaveOutlined />RECORD</Button>
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
        resultList: state.resultReducer.resultList,
        counter: state.counterReducer.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRecordCounter: (counter) => dispatch(record(counter)),
        onRecordDelete: (id) => dispatch(deleteRecord(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
