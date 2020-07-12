import React from 'react';

function FinalData(props) {
    let data = JSON.stringify(props.data, undefined, 4)
    return (
        <pre style={{minHeight: '80vh', padding: '1rem 3rem', color: '#132c51', fontWeight: '600'}}
        >{data}</pre>
    )
}

export default FinalData;