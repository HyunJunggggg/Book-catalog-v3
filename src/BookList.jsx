import React from "react";

function BookList({ title, price, url, image }) {
    return (
      <div className="book">
        <img className="image" src={image} alt={title} />
        <h2>{title}</h2>
        <p className='price'> Price: ${price}</p>
        <button className="button">
          <a className="button" href={url} target="_blank" rel="noreferrer">
            Read More
          </a>
        </button>
      </div>
    );
  }
export default BookList;