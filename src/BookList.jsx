import React from "react";

function BookList({ title, price, url, image }) {

  function remove(e) {
    if (e.target === e.currentTarget) {
      return;
    }

    if (e.target.tagName !== "SPAN") {
      return;
    }

    e.currentTarget.remove();
  }

    return (
      <div className="book" onClick={remove}>
          <span className="remove-btn">Remove</span>
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