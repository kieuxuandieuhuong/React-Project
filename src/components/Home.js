import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000}>
        <div>
          <img src="/kangaroo.jpg" alt="Slide 1" style={{ width: '800px', height: '500px' }} />
        </div>
        <div>
        <img src="/kangaroo.jpg" alt="Slide 2" style={{ width: '800px', height: '500px' }} />
        </div>
        <div>
        <img src="/kangaroo.jpg" alt="Slide 3" style={{ width: '800px', height: '500px' }} />
        </div>
      </Carousel>
    </div>
  );
}

export default Home;