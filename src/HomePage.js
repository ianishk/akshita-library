import BookList from './components/BookList';
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    // try{
    //   fetch(`https://openlibrary.org/search.json?q=${input}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //    setBooks(data.docs[0].seed);
    //   })
    // }
    // catch(err){
    //   console.log(err)
    // }
    navigate(`/booklist?title=${input}`)
    
  }

  return (
    <>
    <h2>Search for books</h2>
    <form>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleSubmit}>Search</button>
    </form>
    <div>
        <BookList books={books} />   
    </div>
    </>
  )
}

export default HomePage