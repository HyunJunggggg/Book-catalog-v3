import React from "react";
import BookList from "./BookList";
import HoverButton from "./HoverButton";
import data from "../data/books.json";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title_text">Book Catalog</h1>
      </div>
      
      <div className="content">
        <div className="add-btn">
          <HoverButton/>
        </div>
        <div className='books'>
        {data.map((book) => (
          <BookList
            key={book.isbn}
            title={book.title}
            price={book.price}
            url={book.url}
            image={book.image}
          />
        ))}
      </div>
      </div>
      <footer className="footer">
        <p>© Hyunjung Shin, 2025</p>
      </footer>
    </div>
  );
}

export default App;