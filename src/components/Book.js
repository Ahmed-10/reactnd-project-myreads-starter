import React from 'react';
import { update } from '../services/BooksAPI';
import { bookshelfs } from '../utils/bookshelfs';
import '../App.css';

const Book = ({id, imageLinks, title, authors, shelf, updateShelf}) => {

    const handleUpdate = (event) => {
        const shelf = event.target.value;
        update(id, shelf).then(() => updateShelf(id, shelf));
    }
    
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onClick={handleUpdate} defaultValue={shelf? shelf : 'none'}>
                            <option value="move" disabled>Move to...</option>
                            {bookshelfs.map(bookshelf => (
                                <option key={bookshelf.shelf} value={bookshelf.shelf}>{bookshelf.title}</option>
                            ))}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title ? title : ''}</div>
                {authors && authors.map((author) => (
                    <div className="book-authors" key={author}>{author}</div>
                ))}
            </div>
        </li>
    );
}

export default Book;