import React from 'react';
import '../App.css';

const Bookshelf = ({title, children}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {Object.keys(children).length? children : <code>No books currently on this shelf</code>}
                </ol>
            </div>
        </div>
    );
}
 
export default Bookshelf;