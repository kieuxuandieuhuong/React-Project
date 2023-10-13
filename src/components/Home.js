import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000}>
        <div>
          <img src="/(1).png" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
        <img src="/(2).png" alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
        <img src="/(3).png" alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Carousel>
    </div>
  );
}

export default Home;