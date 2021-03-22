import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';

function Hotel(props) {
    const [det, setDet] = useState(false);

    function handleClick() {
        setDet(!det);
    }

    return (
    <div className="hotel">
        <b>{props.data.name}</b><br />
        {det && `${props.data.city} (${props.data.stars})`}
        <br />
        <button onClick={handleClick}>Show {det ? "less" : "more"}</button>
    </div>
    );
}

export default Hotel;