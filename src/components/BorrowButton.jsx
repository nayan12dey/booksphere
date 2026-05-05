"use client"

import Swal from 'sweetalert2';

const BorrowButton = () => {

    const handleConfirmation = () => {
        Swal.fire({
            title: "Borrow this book?",
            text: "Do you want to borrow this book now?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, borrow it!"
        }).then((result) => {
            if (result.isConfirmed) Swal.fire({
                title: "Borrowed!",
                text: "The book has been added.",
                icon: "success"
            });
        });
    }



    return (
        <div>
            <button className="btn btn-primary" onClick={handleConfirmation}>
                Borrow This Book
            </button>
        </div>
    );
};

export default BorrowButton;