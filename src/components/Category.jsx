

const Category = async() => {

    const res = await fetch("https://booksphere-swart.vercel.app/data.json")
    const categories = await res.json();
    console.log(categories);


    return (
        <div>
            
        </div>
    );
};

export default Category;