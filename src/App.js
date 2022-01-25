import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ListBooks, SearchBooks } from './pages';
import { getAll } from './services/BooksAPI';
import './App.css'


function BooksApp (){
    const [books, setBooks] = React.useState([]);
    const handleBooksUpdate = (booksList) => setBooks(booksList);

    React.useEffect(() => {
        getAll().then(books => {
            setBooks(books)
        })
    }, []);
  
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<ListBooks books={books} handleUpdate={handleBooksUpdate}/>} />
            <Route path="/search" element={<SearchBooks />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default BooksApp
