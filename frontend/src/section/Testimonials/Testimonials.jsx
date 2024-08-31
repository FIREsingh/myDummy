import { useState } from "react";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard"
import Title from "../../components/Title/Title"
import Slider from 'react-slick'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div 
            className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10' 
            onClick={onClick}
        >
            <HiArrowRight />
        </div>
    );
}

function PreviousArrow(props) {
    const { onClick } = props;
    return (
        <div 
            className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10' 
            onClick={onClick}
        >
            <HiArrowLeft />
        </div>
    );
}

const Testimonials = () => {
    const [dotActive, setDotActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ 
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                marginTop: "20px"     
            }}
            > {dots} </ul>
            </div>
          ),
          customPaging: (i)=> (
            <div
              style={
                i===dotActive ? {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "#ff014f",
                    borderRadius: "50%",
                    cursor: "pointer"
                } : {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "gray",
                    borderRadius: "50%",
                    cursor: "pointer"
                }
              }
            >
            </div>
        )
    }
    return (
        <section id='testimonial' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title="WHAT CLIENTS SAY" des='TESTIMONIAL' />
            </div>

            {/* Slider */}
            <div className='max-w-6xl mx-auto'>
                <Slider {...settings}>
                    <TestimonialCard />
                    <TestimonialCard />                    
                </Slider>
            </div>
        </section>
    )
}

export default Testimonials