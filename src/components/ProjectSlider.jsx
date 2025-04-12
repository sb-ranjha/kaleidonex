import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import LazyImage from './LazyImage';

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
  >
    <ArrowLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
  >
    <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
  </button>
);

const ProjectSlider = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center gap-2 mt-6",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="relative" data-aos="fade-up">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="focus:outline-none">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  effect="blur"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-purple-400">Challenge:</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-1 text-purple-400">Solution:</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-1 text-purple-400">Results:</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.results}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
