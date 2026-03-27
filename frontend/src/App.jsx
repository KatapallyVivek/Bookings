import { useState } from 'react'
import './App.css'
import Tickets from './booking'
function App() {
  let trainHeading = "Train"
  let trainImg = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiBX_ZApT9shr4Q_San4URirNfA6CdzqkCBMgZigusB-5G7mbr6M24hcYvwrtZRQTI0kzzoaaWcS1tL5Pe8wXylXAQEy6yOi2oSerQJ14IuzAjvg8orFRA99bxlS-UdYbZua7WgzRRH0Uh1umazoNpFsdG6Fs0qOXiehJRG4mAY2LNxu5n_5L6W0Kj7Rw/s1200/Vande%20Bharat%20Red%20Gray.jpg'
  let flightHeading = "Flight"
  let flightImg = 'https://images.stockcake.com/public/f/b/6/fb6acf1b-fcaa-4152-b48b-6b0e2b0c5374_large/airplane-mid-flight-stockcake.jpg'
  let busHeading = "Bus"
  let busImg = 'https://www.shutterstock.com/image-illustration/image-bus-on-road-600nw-2568680639.jpg'
  let shipHeading = "Ship"
  let shipImg = 'https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  return (
    <>
      <div className='container'>
        <Tickets Heading={trainHeading} imgUrl={trainImg}></Tickets>
        <Tickets Heading={flightHeading} imgUrl={flightImg}></Tickets>
        <Tickets Heading={busHeading} imgUrl={busImg} ></Tickets>
        <Tickets Heading={shipHeading} imgUrl={shipImg}></Tickets>
      </div>
    </>
  )
}

export default App
