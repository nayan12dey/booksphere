
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="border-b border-b-gray-400 px-2">
            <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
                <div>
                    <Link href={"/"} className='flex gap-2 items-center'>
                        <Image
                            src={"/logo.avif"}
                            alt="logo"
                            loading="eager"
                            width={30}
                            height={30}
                            className="object-cover h-auto w-auto"
                        />
                        <h3 className="font-black text-lg">BookSphere</h3>
                    </Link>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-books"}>All Books</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>My Profile</Link>
                    </li>

                </ul>

                <div className="flex gap-4">
                    <Button variant='danger'>Login</Button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;