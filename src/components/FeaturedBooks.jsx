import Image from "next/image";
import BookCard from "./BookCard";



const FeaturedBooks = async () => {

    const res = await fetch("https://booksphere-swart.vercel.app/data.json")
    const books = await res.json();
    // console.log(books)

    const topBooks = books.slice(0, 4)
    // console.log(topBooks)


    return (
        <div className="my-10">
            <h1 className="text-5xl font-bold text-center my-10">Featured Books</h1>

            <div className="grid grid-cols-4 mx-auto">
                {
                    topBooks.map(book => <BookCard key={book.id} book={book}>
                           {book.title}
                    </BookCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedBooks;