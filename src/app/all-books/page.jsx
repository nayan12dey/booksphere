"use client"

import BookCard from '@/components/BookCard';
import { Description, Label, SearchField } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const AllBooksPage =  () => {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchBooks = async() => {
            const res = await fetch("https://booksphere-swart.vercel.app/data.json");
            const book = await res.json();
            setBooks(book)
        }

        fetchBooks();
    })

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))


    return (
        <div>
            <h1 className='text-4xl font-bold m-3'>All Books</h1>


            <SearchField name="search" className="w-[50%]">
                <Label>Search Books</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input placeholder="Search Books..." onChange={(e) => setSearch(e.target.value)} />
                    <SearchField.ClearButton onClick={() => setSearch("")} />
                </SearchField.Group>
            </SearchField>

            <div className='grid grid-cols-4 my-10 gap-6'>
                {
                    filteredBooks.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;