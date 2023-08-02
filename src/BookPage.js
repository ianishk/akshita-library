import BookDetails from './components/BookDetails';
import RelatedAuthors from './components/RelatedAuthors';

const BookPage = () => {
  return (
   <>
   <div>
   <BookDetails/>
   </div>
   <div>
    <RelatedAuthors/>
   </div>
   </>

  )
}

export default BookPage