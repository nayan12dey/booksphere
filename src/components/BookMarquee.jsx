
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
        <div>
            <Marquee>
                {
                    book.map(b => <span key={book.id}>New Arrivals:{b.title} || Special Discount on Memberships...</span>)
                }
            </Marquee>
        </div>
    );
};

export default BookMarquee;