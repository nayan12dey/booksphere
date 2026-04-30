
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://cdn.pixabay.com/photo/2023/02/21/01/19/library-7803315_1280.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl my-10">

            <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                        Find Your Next Read
                    </h1>

                    <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200 text-center">
                        Explore thousands of books across genres. Discover stories that inspire, educate, and entertain.
                    </p>

                    <div className='flex justify-center'>
                        <Link href="/all-books">
                            <Button className="bg-green-500 text-white hover:bg-green-600 p-6">
                                Browse Now
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;