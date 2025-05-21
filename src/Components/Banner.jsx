import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router';


const eventSlides = [
    {
        id: 1,
        title: " Community Garden Day",
        description: "Meet local gardeners, plant vegetables, and share tips!",
        image: "https://i.ibb.co/vCg9zrX9/download.jpg",
        link: "https://communitygarden.org.au/about-national-community-garden-day/",
        buttonText: "Explore Now",
    },
    {
        id: 2,
        title: " Organic Compost Workshop",
        description: "Learn how to compost kitchen waste and enrich your soil.",
        image: "https://i.ibb.co/TxWSDjTs/beginners-composting.jpg",
        link: "https://ecologyactioncenter.org/event/backyard-composting-workshop-saturday-may-10-2025-1030-1130am/",
        buttonText: "Explore Now",
    },
    {
        id: 3,
        title: "Spring Plant Swap",
        description: "Bring a plant, take a plant. A perfect day for plant lovers.",
        image: "https://i.ibb.co/fGFnYzCv/images.jpg",
        link: "https://www.schmidtsfarmandgreenhouse.com/classes-and-events/plant-swap-1",
        buttonText: "Explore",
    },
];


const PrevArrow = ({ className, style, onClick }) => (
    <button
        className={className}
        style={{ ...style, display: "block", left: 10, zIndex: 1 }}
        onClick={onClick}
        aria-label="Previous Slide"
    >
        &lt;
    </button>
);

const NextArrow = ({ className, style, onClick }) => (
    <button
        className={className}
        style={{ ...style, display: "block", right: 10, zIndex: 1 }}
        onClick={onClick}
        aria-label="Next Slide"
    >
        &gt;
    </button>
);


const Banner = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };






    return (
        <div className="w-full h-[500px] md:h-[600px] overflow-hidden"
        >
            <Slider ref={sliderRef}  {...settings}>
                {eventSlides.map((event) => (
                    <div key={event.id}>
                        <div
                            className="h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
                            style={{ backgroundImage: `url(${event.image})` }}
                        >
                            <div className="bg-black bg-opacity-60 p-6 md:p-10 rounded-xl text-white text-center max-w-2xl mx-4">
                                <h2 className="text-2xl md:text-4xl font-bold mb-3">{event.title}</h2>
                                <p className="mb-4 text-sm md:text-base">{event.description}</p>
                                <Link to={event.link} className="btn btn-success">
                                    {event.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;