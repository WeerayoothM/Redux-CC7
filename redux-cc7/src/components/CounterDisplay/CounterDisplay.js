import { Avatar } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

function CounterDisplay({ counter }) {
    return (
        <>
            <div style={{
                backgroundColor: '#385898',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid hsl(0,0%,90%)',
                borderRadius: '8px 8px 0 0 ',
                width: '350px',
                height: '200px',
                margin: '0 auto'
            }}>
                <h1 style={{ fontSize: "4rem", color: 'wheat' }}>{counter === 3 ? '<' + counter : counter}</h1>
            </div>
            <div style={{
                backgroundColor: 'lightgray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid hsl(0,0%,90%)',
                borderRadius: '0 0 8px 8px ',
                width: '350px',
                height: '50px',
                margin: '0 auto'
            }}>
                <Avatar size={20} style={{ backgroundColor: 'hsl(0,0%,70%)' }} />
            </div>
            <div style={{
                backgroundColor: 'lightgray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid hsl(0,0%,90%)',
                width: '70px',
                height: '50px',
                margin: '0 auto',
                clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)'
            }}>

            </div>

            <div style={{
                backgroundColor: 'lightgray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid hsl(0,0%,90%)',
                borderRadius: '0 0 5px 5px ',
                width: '150px',
                height: '10px',
                margin: '0 auto'
            }}>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps, null)(CounterDisplay);
//* connect(props,dispatch)
