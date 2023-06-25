import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://assets.gulfoilltd.com/gomel/2022-02/2.%20CAR_EO_0.webp" className="w-full md:h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-1/3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.cnet.com/a/img/resize/ff7e57ba4a99fad20eaa66101f9e0a59e4e9b6eb/hub/2021/03/03/490f3066-10c5-4cab-9bc6-66938e8c30e2/crescent-170-piece-tool-set.jpg?auto=webp&fit=crop&height=360&width=640" className="w-full md:h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-1/3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://www.idolz.com/wp-content/uploads/2021/04/vehicle-spare-parts-1-1.jpg" className="w-full md:h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-1/3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Banner;
