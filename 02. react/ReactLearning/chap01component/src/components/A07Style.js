
import React from 'react'

import './css/A01Style.css'

function A07Style() {
    
    const clzName = 'title'

    // 한번만 사용 가능
    const style = {
        backgroundColor: 'black',
        fontSize: '24pt',
        fontWeight: 'bold',
        padding: '20px',
        color: 'white'
    }
    
    return (
        <div>
            <h3 className="title color">A01 Style</h3>
            <h3 className={clzName}>A01 Style</h3>
            <h3 style={style}>A01 Style</h3>
            {/* 직접 적으려면 */}
            <h3 style={
                {
                    backgroundColor: 'black',
                    fontSize: '24pt',
                    fontWeight: 'bold',
                    padding: '20px',
                    color: 'yellow'
                }
                    }>A01 Style</h3>
        </div>
    )
}

export default A07Style
