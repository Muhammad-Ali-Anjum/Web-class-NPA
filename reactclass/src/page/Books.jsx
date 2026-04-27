import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../components/auth";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h2>Books List</h2>

      {books.map(book => {
        const paid = book.price > 50;

        if (paid && !isAuth()) return null;

        return (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h4>{book.title}</h4>
            </Link>
            <p>${book.price}</p>
            {paid && <span>🔒 Paid</span>}
          </div>
        );
      })}
    </div>
  );
}

export default Books;