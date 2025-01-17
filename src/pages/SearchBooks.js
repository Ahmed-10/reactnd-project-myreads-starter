import React from 'react';
import { Link } from "react-router-dom";
import { search } from '../services/BooksAPI';
import { Book, EmptyResult } from '../components'
import '../App.css';

const SearchBooks = (props) => {
    const [query, setQuery] = React.useState('');
    const [books, setBooks] = React.useState([]);
    const [error, setError] = React.useState({
        error: false,
        message: ''
    });
    
    const updateShelf = (bookId, shelf, index) => {
        let bookList = props.books
        const _index = bookList.findIndex(book => book.id === bookId)
        if(_index !== -1) {
            if(bookList[_index].shelf === shelf) { 
                return 
            } else {
                props.handleUpdate([])
                // remove the book and push it back to the top of the list
                const book = bookList.splice(_index, 1)[0]
                book.shelf = shelf
                bookList.push(book)
                props.handleUpdate(bookList)
            }
        } else {
            if(shelf === 'none') {
                return
            } else {
                bookList.push({...books[index], shelf})
                props.handleUpdate(bookList)
            }
        }
    }

    const handleSearch = (event) => setQuery(event.target.value)

    React.useEffect(() => {
        if(query === '') {
            setBooks([]);
            setError({error: false, message: ''});
        } else {
            search(query).then(books => {
                if(books.error) {
                    setError({error: true, message: books.error});
                    setBooks([]);
                } else {
                    setError({error: false, message: ''});
                    setBooks(books);
                }
            })
        }
    }, [query])
    
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
                    {books.map((book, index) => {
                        const shelf = props.books.find(b => b.id === book.id)? props.books.find(b => b.id === book.id).shelf : 'none';
                        return <Book key={book.id} {...book} shelf={shelf} updateShelf={(id, shelf) => updateShelf(id, shelf, index)}/>
                    })}
                </ol>
                {error.error && <EmptyResult />}
            </div>
        </div>
    );
}

export default SearchBooks;