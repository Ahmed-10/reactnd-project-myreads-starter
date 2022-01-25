import React from 'react';
import { useNavigate } from "react-router-dom";
import { Bookshelf, Book } from '../components';
import { bookshelfs } from '../utils/bookshelfs';
import '../App.css';

const ListBooks = (props) => {
    const navigate = useNavigate();

    const updateShelf = (bookId, shelf) => {
        let bookList = props.books
        const index = bookList.findIndex(book => book.id === bookId)
        if(bookList[index].shelf === shelf) { 
            return 
        } else {
            props.handleUpdate([])
            // remove the book and push it back to the top of the list
            const book = bookList.splice(index, 1)[0]
            book.shelf = shelf
            bookList.push(book)
            props.handleUpdate(bookList)
        }
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {bookshelfs.map(bookshelf => (
                    <Bookshelf title={bookshelf.title} key={bookshelf.shelf}>
                        {props.books.filter(book => book.shelf === bookshelf.shelf).map(book => (
                            <Book key={book.id} {...book} updateShelf={updateShelf}/>
                        ))}
                    </Bookshelf>
                ))}
            </div>
            <div className="open-search">
                <button onClick={() => navigate('/search')}>Add a book</button>
            </div>
        </div>
    );
}

export default ListBooks;