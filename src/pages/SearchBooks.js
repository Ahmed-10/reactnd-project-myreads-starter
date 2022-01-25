import React from 'react';
import { Link } from "react-router-dom";
import { search } from '../services/BooksAPI';
import { Book } from '../components'
import '../App.css';

const SearchBooks = () => {
    const [query, setQuery] = React.useState('');
    const [books, setBooks] = React.useState([]);
    
    const handleSearch = (event) => {
        setQuery(event.target.value)
        search(event.target.value).then(books => setBooks(books))
    }
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" value={query} onChange={handleSearch}/>

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books.map(book => (
                        <Book key={book.id} {...book} updateShelf={(id, shelf) => console.log(id, shelf)}/>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default SearchBooks;