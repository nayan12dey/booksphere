
import React from 'react';

const BookStats = () => {

    const stats = [
        { id: 1, label: "Books Available", value: "5000" },
        { id: 2, label: "Active Readers", value: "1000" },
        { id: 3, label: "Categories", value: "50" },
        { id: 4, label: "Daily Visits", value: "500" }
    ]


    return (

        <div className="my-24 max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-14 ">
                Our Growing Library
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                {stats.map(stat => (
                    <div
                        key={stat.id}
                        className=" p-7 rounded-2xl border border-gray-100 
                           bg-gradient-to-b from-white to-gray-50 
                           shadow-sm hover:shadow-xl 
                           transition-all duration-300 ease-out"
                    >

                        <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                            {stat.value}
                        </h3>

                        <p className="text-gray-600 mt-3 font-medium">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookStats;