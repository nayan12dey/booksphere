

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiStar } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({ book }) => {

    // console.log(book);



    return (
        <div>
            <div className="card bg-base-100 w-[95%] shadow-sm p-4 mx-auto border border-gray-300 h-full hover:shadow-lg transition duration-300">
                <figure className='bg-base-300 p-4 rounded-xl relative w-full aspect-square'>
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        className='rounded-xl object-contain p-5'
                    />
                </figure>
                <div className="card-body">

                    <h2 className="card-title text-xl">
                        {book.title}
                    </h2>
                    <p className='font-semibold'>{book.author}</p>

                    <div className="card-actions justify-between items-center border-t border-dashed border-gray-300 pt-4 text-lg">
                        <div className="font-semibold">{book.category}</div>
                        <div className="flex items-center gap-1"><BiStar className='text-yellow-600' /></div>

                    </div>
                    <Link href={`all-books/${book.id}`}><button className='btn btn-soft btn-primary w-full mt-2'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;