
import { Button } from "@heroui/react";


const Category = ({ selectedCategory, setSelectedCategory }) => {

    return (

        <aside className="w-64 p-4 bg-base-100">
            <h2 className="text-xl font-bold mb-4">Categories</h2>

            <ul className="space-y-2">
        
                <li
                    onClick={() => setSelectedCategory("All")}
                    className={`cursor-pointer p-2 rounded-md transition ${selectedCategory === "All"
                            ? "bg-primary text-white"
                            : "hover:bg-gray-200"
                        }`}
                >
                    All Books
                </li>


                {["Story", "Tech", "Science"].map((category, index) => (
                    <li
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`cursor-pointer p-2 rounded-md transition ${selectedCategory === category
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                            }`}
                    >
                        {category}
                    </li>
                ))}

            </ul>
        </aside>
    );
};

export default Category;