import React from 'react'
import Carousel from 'react-bootstrap/Carousel'



function HomeCarousel() {
  return (

    <div>

      <Carousel>
        <Carousel.Item style={{ 'height': "300px" }}>
          <img style={{ 'height': "300px" }}
            className="d-block w-100"
            src="images/home_page/imge_home_1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ 'height': "300px" }}>
          <img style={{ 'height': "300px" }}
            className="d-block w-100 "
            src="images/home_page/plants-home-1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ 'height': "300px" }}>
          <img style={{ 'height': "300px" }}
            className="d-block w-100"
            src="images/home_page/garden-tools-1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    
    </div>
  )
}

export default HomeCarousel


