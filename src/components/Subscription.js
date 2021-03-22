import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';

function Subscription(props) {
    const [value, setValue] = useState("");
    const [msg, setMsg] = useState("");
    const [show, setShow] = useState(false);

    function isValid(str) {
        return /\w+@\w+\.\w+/.test(str);
    }

    async function handleSubmit() {
        setMsg(<LoadingMask />);
        const rep = await fetch("api/hotels/subscribe", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: value, hotel: props.hname})
        })
            .then(res => res.json());
        setMsg(rep.success ? "Subscribed" : "Already subscribed");
        setTimeout(props.show, 5000, false);
    }   

    return (
        <>
            <button onClick={() => setShow(!show)}>Request more info about {props.hname}</button><br /><br />
        {msg ? msg :
            show && 
            <form onSubmit={handleSubmit}>
                <label> E-mail:
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                </label>
                <input type="submit" value="Submit" disabled={!isValid(value)} />
            </form>
        }
        </>
    );
}

export default Subscription;