import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselContents (props) {
    //console.log(props);
    const { slides } = props;
    const [index1, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade className="carousel slide container py-3" activeIndex={index1} onSelect={handleSelect}>
            {slides.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                    className="d-block w-100"
                    src={item.slideImg}
                    alt={item.productName}
                    />
                    <Carousel.Caption>
                    <h3>{item.productName}</h3>
                    <p>{item.productTagline}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

function MainCarouselMobile() {

    const path = window.location.pathname;
    const slides = [
        {
            slideImg: `/img/sm-1.png`,
            productName: 'Calling Card',
            productTagline: 'Awesome Calling Cards',
        },
        {
            slideImg: `/img/sm-2.png`,
            productName: 'Mugs',
            productTagline: 'Awesome Mugs',
        },
        {
            slideImg: `/img/sm-3.png`,
            productName: 'T-shirt',
            productTagline: 'Awesome T-shirts',
        },
    ];

    return <CarouselContents slides={slides} />;
  
}

export default MainCarouselMobile;