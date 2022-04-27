import React from 'react';

function Square(props) {
    let boxColor = (props.val === 1) ? 'blackBox' : 'whiteBox';

    return (
        <div className={boxColor} onClick={() => props.click(props.x, props.y)}>

        </div>
    );
}
export default Square;