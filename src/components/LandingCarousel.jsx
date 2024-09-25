import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  // Sample data for the carousel images and links
  const carouselItems = [
    {
      id: 1,
      image: 'https://thecocoapost.com/wp-content/uploads/2021/06/Nestles-unhealthy-food-products.jpeg',
      link: '/page1',
      title: 'SHOP NOW',
    },
    {
      id: 2,
      image: 'https://www.sikafinance.com/i/info/b/BRVMC0_8ee7250c-6868-452c-bc5d-14f97a4db576_b.jpg',
      link: '/page2',
      title: 'SHOP NOW',
    },
    {
      id: 3,
      image: 'https://www.nicepng.com/png/detail/392-3920852_nestl-productos-nestle-png.png',
      link: '/page3',
      title: 'SHOP NOW',
    },
  ];

  return (
    <div className="carousel-container mx-auto max-w-2xl overflow-hidden">
      <Slider {...settings}>
        {carouselItems.map(item => (
          <Link to={item.link} key={item.id}>
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title} 
                style={{
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '300px', 
                  objectFit: 'cover'
                }} 
                className="block" 
              />
              <div className="absolute bottom-2 left-4">
                <Typography 
                  variant="h6" 
                  style={{ 
                    color: 'white', 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    padding: '0.5rem', 
                    borderRadius: '0.25rem' 
                  }}
                >
                  {item.title}
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
