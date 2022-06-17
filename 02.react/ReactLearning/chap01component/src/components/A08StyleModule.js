
import React from 'react'

import one from './css/A02Style1.module.css'
import two from './css/A02Style2.module.css'

function A08StyleModule() {
    return (
        <div>
            {/* 이렇게 주면 하나만 줄 수 있다. */}
            <h3 className={one.title}>A02 Style <span>Module</span> Component</h3>
            {/* 여러개 적용하는법 */}
            <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>

            <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>
            
        </div>
    )
}

export default A08StyleModule;
