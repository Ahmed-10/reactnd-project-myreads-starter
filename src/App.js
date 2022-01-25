import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import { ListBooks, SearchBooks } from './pages';

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<ListBooks />} />
            <Route path="/search" element={<SearchBooks />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
