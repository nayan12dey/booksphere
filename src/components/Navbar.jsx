"use client"


import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiUser } from 'react-icons/bi';

const Navbar = () => {


    const { data: session } = authClient.useSession()
    const user = session?.user;

    console.log("session user", user)

    const handleSignOut = async() => {
        await authClient.signOut()
    }


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
                    {!user && <Link href={"/login"}><Button variant='danger'>Login</Button></Link>}

                    {user && <div className='flex items-center gap-5'>
                        <p className='flex items-center gap-1'><BiUser></BiUser> {user.name}</p>
                        <Link href={"/login"}><Button variant='danger' onClick={handleSignOut}>Logout</Button></Link>
                    </div>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;