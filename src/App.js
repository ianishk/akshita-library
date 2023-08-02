import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import BookPage from './BookPage';

function App() {
  return (
    <div className="App">
     <Router>
 
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/books/:id' element={<BookPage/>}/>
      </Routes>

     </Router>
    </div>
  );
}

export default App;
