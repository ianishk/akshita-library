import React from 'react';
import BookCard from './BookCard';

const BookList = ({books}) => {
  console.log(books);

  return (
    <div>
    {
      books.slice(0, 10).map((book, index) => {
        return (
        <BookCard key = {index} book={book} />
        )})
    }
    
   
   </div>
  )
}

export default BookList