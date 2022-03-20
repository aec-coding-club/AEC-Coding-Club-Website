import { useState, useEffect } from "react";
import { sliderData } from "../../data/sliderData";
import "../styles/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    //console.log("next");
   
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    //console.log("prev");

  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);


  return (
    <div className='slider'>
      <span className='arrow prev' onClick={prevSlide}>
        {"<"}
      </span>
      <span className='arrow next' onClick={nextSlide}>
        {">"}
      </span>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.src} alt='slide' className='image' />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
