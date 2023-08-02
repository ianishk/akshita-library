import BookList from './components/BookList';
import React, {useState, useEffect } from 'react'

const HomePage = () => {
  
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    try{
      fetch(`https://openlibrary.org/search.json?title=${input}`)
      .then(res => res.json())
      .then(data => {
       setBooks(data.docs[0].seed);
       console.log(books);
       
      })
    }
    catch(err){
      console.log(err)
    }
    
  }

  return (
    <>
    <h2>Search for books</h2>
    <form>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleSubmit}>Search</button>
    </form>
    <div>
        <BookList books={books}/>
        
    </div>
    </>
  )
}

export default HomePage