import { useState } from 'react'
import './App.css'
import Tickets from './booking'
function App() {

  // details
  let trainHeading = "Train"
  let trainImg = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiBX_ZApT9shr4Q_San4URirNfA6CdzqkCBMgZigusB-5G7mbr6M24hcYvwrtZRQTI0kzzoaaWcS1tL5Pe8wXylXAQEy6yOi2oSerQJ14IuzAjvg8orFRA99bxlS-UdYbZua7WgzRRH0Uh1umazoNpFsdG6Fs0qOXiehJRG4mAY2LNxu5n_5L6W0Kj7Rw/s1200/Vande%20Bharat%20Red%20Gray.jpg'
  let trainAmt = 500;

  let flightHeading = "Flight"
  let flightImg = 'https://images.stockcake.com/public/f/b/6/fb6acf1b-fcaa-4152-b48b-6b0e2b0c5374_large/airplane-mid-flight-stockcake.jpg'
  let flightAmt = 5000;
  
  let busHeading = "Bus"
  let busImg = 'https://www.shutterstock.com/image-illustration/image-bus-on-road-600nw-2568680639.jpg'
  let busAmt = 100;

  let shipHeading = "Ship"
  let shipImg = 'https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  let shipAmt = 7000;

  
  return (
    <>
      <div className='container'>
        <Tickets Heading={trainHeading} imgUrl={trainImg} amount={trainAmt}></Tickets>
        <Tickets Heading={flightHeading} imgUrl={flightImg} amount={flightAmt}></Tickets>
        <Tickets Heading={busHeading} imgUrl={busImg} amount={busAmt}></Tickets>
        <Tickets Heading={shipHeading} imgUrl={shipImg} amount={shipAmt}></Tickets>
      </div>
    </>
  )
}

export default App
