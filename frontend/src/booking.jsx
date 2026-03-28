import React, { useEffect, useState } from 'react'
import './booking.css'

function Tickets({Heading , imgUrl , amount}) {
    const [state, setState] = useState(0);
    const [availble, setAvailble] = useState(100)

    let totalAmt = state * amount;

    useEffect(function () {
        if(state < 0 ){
            setState(0);
            setAvailble(100);
        }
    });

    function bookTicket() {
        setState(state + 1);
        setAvailble(availble -1);
    }
    function cancelTicket() {

            setState(state - 1);
            setAvailble(availble + 1);
    }
  return (
    <div>
        
        <div className='Main'>
            <h1>{Heading}</h1>
            <h3>Amount per one ticket is {amount}</h3>
            <h2>{availble} tickets are available</h2>
            <h1>{state} tickets booked</h1>
            <img src={imgUrl} alt="" />
            <br />
            <button onClick={bookTicket}>Book</button>
            <button onClick={cancelTicket}>Cancel</button>
            <p>The total cost is {totalAmt} </p>
        </div>

    </div>
  )
}

export default Tickets