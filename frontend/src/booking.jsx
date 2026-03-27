import React, { useState } from 'react'
import './booking.css'
function Tickets({Heading , imgUrl}) {
    const [state, setState] = useState(0);

    function bookTicket() {
        setState(state + 1);
    }
    function cancelTicket() {
        if(state > 0) {

            setState(state - 1)
        }
    }
  return (
    <div>
        
        <div className='Main'>
            <h1>{Heading}</h1>
            <h1>{state} tickets booked</h1>
            <img src={imgUrl} alt="" />
            <br />
            <button onClick={bookTicket}>Book</button>
            <button onClick={cancelTicket}>Cancel</button>
        </div>

    </div>
  )
}

export default Tickets