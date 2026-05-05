
import { Button } from '@heroui/react';
import Link from 'next/link';


const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-extrabold text-gray-800">404</h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
                Oops! Page not found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
            </p>

            <Link href="/" className='my-4'>
                <Button variant='danger'>Go Back Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;