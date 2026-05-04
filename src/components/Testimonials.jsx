"use client"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Testimonials = () => {

    const reviews = [
        {
            id: 1,
            name: "Amit Sharma",
            text: "BookSphere helped me discover amazing books I would never find otherwise.",
            image: "https://i.ibb.co/QFw0r4yS/Ellipse-1-2.png"
        },
        {
            id: 2,
            name: "Priya Sen",
            text: "Simple, clean, and fast. I love browsing books here every evening.",
            image: "https://i.ibb.co/b5C0qFVL/Ellipse-1.png"
        },
        {
            id: 3,
            name: "Rahul Das",
            text: "The UI is very smooth and the book collection is impressive.",
            image: "https://i.ibb.co/Nnsf6KJ8/Ellipse-1-1.png"
        },
        {
            id: 4,
            name: "Sneha Iyer",
            text: "BookSphere makes it so easy to find books based on my mood. Absolutely love it!",
            image: "https://i.ibb.co/SwdYMP6d/Ellipse-1-3.png"
        },
        {
            id: 5,
            name: "Arjun Mehta",
            text: "Great collection and very intuitive design. It feels like a personalized library.",
            image: "https://i.ibb.co/dsJHHF9j/Ellipse-1-6.png"
        },
        {
            id: 6,
            name: "Neha Kapoor",
            text: "I enjoy how quickly I can discover new authors. The recommendations are spot on.",
            image: "https://i.ibb.co/hF6KB5Gv/Ellipse-1-7.png"
        },
        {
            id: 7,
            name: "Vikram Roy",
            text: "Smooth experience overall. Browsing and saving books is effortless.",
            image: "https://i.ibb.co/WN6VxYkd/Ellipse-1-4.png"
        },
        {
            id: 8,
            name: "Ananya Bose",
            text: "A perfect platform for book lovers. I find something new every time I visit.",
            image: "https://i.ibb.co/R4G0NT6h/Ellipse-1-5.png"
        },
    ]


    return (
        <div className="bg-base-200 py-20 my-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">
                    What Readers Say
                </h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <div className="gap-6">
                        {reviews.map(review => (
                            <SwiperSlide key={review.id} className="!w-[320px]">
                                <div className="bg-white p-6 rounded-xl shadow-lg text-center h-full">

                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
                                    />

                                    <p className="text-gray-600 italic mb-4">
                                        &quot;{review.text}&quot;
                                    </p>

                                    <h4 className="font-semibold text-blue-600">
                                        - {review.name}
                                    </h4>

                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>



            </div>
        </div>
    );
};

export default Testimonials;