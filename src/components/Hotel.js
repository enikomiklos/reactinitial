import React, { useState } from 'react';
import Subscription from './Subscription';

function Hotel(props) {
    const [det, setDet] = useState(false);
    const [sub, setSub] = useState(true);

    function handleClick() {
        if (det) setSub(false);
        setDet(!det);
    }

    return (
    <div className="hotel">
        <b>{props.data.name}</b><br />
        <button onClick={handleClick}>Show {det ? "less" : "more"}</button><br /><br />
        {det ? 
        <>
            {props.data.city} ({props.data.stars})<br /><br />
            {sub && <Subscription hname={props.data.name} show={setSub}/>}
        </>
        : null }
    </div>
    );
}

export default Hotel;