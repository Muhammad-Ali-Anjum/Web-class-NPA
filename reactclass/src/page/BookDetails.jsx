import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuth } from "../components/auth";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const paid = book.price > 50;

  if (paid && !isAuth()) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>${book.price}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;