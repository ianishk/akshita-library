import React, {useState, useEffect} from 'react'
import BookCard from '../components/BookCard';
import { useSearchParams } from "react-router-dom";

export const BookList = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [books, setBooks] = useState([]);
    useEffect(() => {
      try{
      fetch(`https://openlibrary.org/search.json?q=${searchParams.get("title")}`)
      .then(res => res.json())
      .then(data => {
       setBooks(data.docs);
      })
    }
    catch(err){
      console.log(err)
    }
    }, [])
    
  return (
<>
    {books.map(book => <BookCard book={book} key={book.id} />)}
  </>
  )
}
