


const BookDetailsPage = async ({ params }) => {

    const { id } = await params;
    console.log("id", id);

    const res = await fetch("https://booksphere-swart.vercel.app/data.json");
    const books = await res.json();

    const book = books.find(b => b.id == id);

    console.log(book);



    return (
        <div className="p-10">
            <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden mt-6 border border-base-200 lg:card-side">


                <figure className="lg:w-1/3 bg-base-200 p-6 flex items-center justify-center">
                    <img
                        src={book.image_url}
                        alt={book.title}
                        className="rounded-xl h-48 sm:h-56 md:h-64 object-contain"
                    />
                </figure>


                <div className="card-body lg:w-2/3 p-6 space-y-4">

                    <div>
                        <h2 className="text-3xl font-bold">{book.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            by <span className="font-medium text-gray-700">{book.author}</span>
                        </p>
                    </div>


                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="badge badge-primary badge-outline">
                            {book.category}
                        </span>
                    </div>


                    <p className="text-gray-600 text-sm leading-relaxed">
                        {book.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm bg-base-200 p-4 rounded-xl">
                        <div>
                            <p className="text-gray-400">Category</p>
                            <p className="font-semibold">{book.category}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Stock</p>
                            <p className="font-semibold">{book.available_quantity} copies left</p>
                        </div>
                    </div>

                    <div className="card-actions justify-end mt-2">
                        <button className="btn btn-primary">
                            Borrow This Book
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;