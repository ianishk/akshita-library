import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import BookPage from './BookPage';
import { BookList } from './pages/BookList';

function App() {
  return (
    <div className="App">
     <Router>
 
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/booklist' element={<BookList/>}/>
      </Routes>

     </Router>
    </div>
  );
}

export default App;
