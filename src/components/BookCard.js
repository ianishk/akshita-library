import{useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const BookCard = ({book}) => {
  
  const [title,setTitle] = useState('');
  const [date, setDate] = useState('');
  const [covers, setCover] = useState('');
  // console.log(book);
  const URL= "https://openlibrary.org" + book + ".json";
  

  function fetchData(){
  console.log("sdfsfas",URL)
  fetch(URL)
  .then(res => (res.json()))
  .then((data) => {
    // console.log("first",data)
    setTitle(data.title);
    setDate(data.last_modified.value);
    // setCover(covers);
  })
  .catch((err)=>{
    console.log(err);
  })
  };

useEffect(()=> {fetchData()}
,[])

 const coverImg = `https://covers.openlibrary.org/b/isbn/${covers}-S.jpg`;

  return (
    <Link to="/book/">
    <div>
      <p>Bookcard</p>
      <p>{title}</p>
      <p>{date}</p>
      <img src={coverImg}/>

    </div>
    </Link>
  )
}

export default BookCard;