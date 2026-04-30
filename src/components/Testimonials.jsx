
import React from 'react';

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
        }
    ]


    return (
        <div className="bg-base-200 py-20 my-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">
                    What Readers Say
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map(review => (
                        <div
                            key={review.id}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
                        >
                        <img src={review.image} alt="" className='w-15' />
                            <p className="text-gray-600 italic my-4">
                                <span>&quot;</span>{review.text}<span>&quot;</span>
                            </p>
                            <h4 className="font-semibold text-blue-600">
                                - {review.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;