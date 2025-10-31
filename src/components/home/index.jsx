import React from 'react'
import khan from './new image.jpg'
let picture=[
  {src: khan, alt: 'Khan'}

]
function Home() {
  return (
    <div>
      <div>
        {picture.map((pic, index) => (
          <div key={index}>
            <img className='images' src={pic.src} alt={pic.alt} />
          </div>
        ))}
      </div>
      </div>
    
  )
}

export default Home
