import {Link} from 'react-router-dom';

const BookCard = ({book}) => {
  console.log(book)

  return (
    <Link to="/book/">
    <div>
      <p>Bookcard</p>
      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}  alt='loading'/>
      <p>{book.title}</p>
    </div>
    </Link>
  )
}

export default BookCard;