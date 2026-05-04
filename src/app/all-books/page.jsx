"use client"

import BookCard from '@/components/BookCard';
import Category from '@/components/Category';
import { Description, Label, SearchField } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const AllBooksPage = () => {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://booksphere-swart.vercel.app/data.json");
            const books = await res.json();
            setBooks(books)
        }

        fetchData();
    }, [])


    const filteredBooks = books.filter((book) => {
        const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());

        const matchCategory = selectedCategory === "All" || book.category === selectedCategory;

        return matchSearch && matchCategory;
    });

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


            <div className='flex'>
                <Category categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></Category>

                <div className='flex-1 grid grid-cols-3 my-10 gap-6'>
                    {
                        filteredBooks.map(book => <BookCard key={book.id} book={book}></BookCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;