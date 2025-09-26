import React from "react";

function BookList({ title, price, url, image }) {
    return (
      <div className="book">
        <img className="image" src={image} alt={title} />
        <h2>{title}</h2>
        <p className='price'> Price: ${price}</p>
          <a className="button" href={url} target="_blank" rel="noreferrer">
            Read More
          </a>

      </div>
    );
  }
export default BookList;