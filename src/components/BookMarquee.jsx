
import React from 'react';
import Marquee from 'react-fast-marquee';

const BookMarquee = () => {

    const book = [
        {
            "id": 1,
            "title": "Rich Dad Poor Dad",
        }
    ]


    return (
        <div className="bg-linear-to-r from-blue-50 via-white to-purple-50 border-y border-gray-200 py-2 my-10">
            <Marquee pauseOnHover={true} speed={60}>

                {book.map((b) => (
                    <span
                        key={b.id}
                        className="mx-10 text-gray-700 text-lg flex items-center gap-2"
                    >
                        <span className="text-blue-600 font-semibold">
                             New Arrivals:
                        </span>
                        <span className="font-medium text-gray-800">
                            {b.title}
                        </span>
                    </span>
                ))}

                <span>|</span>

                <span className="mx-10 text-lg">
                    <span className="text-purple-600 font-semibold">
                         Special Discount on Memberships...
                    </span>
                </span>

            </Marquee>
        </div>

    );
};

export default BookMarquee;