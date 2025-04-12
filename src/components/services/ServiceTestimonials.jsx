import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import LazyImage from '../LazyImage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceTestimonials = ({ title, testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: testimonials.length > 1 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="testimonials" className="py-20 bg-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center" data-aos="fade-up">
          {title || "Client Success Stories"}
        </h2>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <LazyImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                        effect="blur"
                        wrapperClassName="w-16 h-16 rounded-full overflow-hidden"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                    {testimonial.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 border-t border-white/10 pt-6">
                        {Object.entries(testimonial.metrics).map(([key, value], i) => (
                          <div key={i} className="text-center">
                            <div className="text-purple-400 font-bold text-xl">{value}</div>
                            <div className="text-gray-400 text-sm">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceTestimonials;
