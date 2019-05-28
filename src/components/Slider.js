import React from 'react';
import Swiper from 'react-id-swiper';

class Slider extends React.Component {
  render() {
    const params = {
      pagination: '.swiper-pagination',
      slidesPerView: 3,
      paginationClickable: true,
      spaceBetween: 30,
      freeMode: true,
      direction: "vertical"
    }
    return (
      
    <Swiper {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
    );}
}

export default Slider;