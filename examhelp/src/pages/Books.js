import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books");
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  
  return (
    <section
      id="books"
      class="bg-light mt-4"
      style={{ padding: "60px 0px", backgroundColor: "rgb(240, 238, 238)" }}
    >
      <div class="container-lg">
        <div class="text-center">
          <h2>
            <i class="bi bi-info-circle-fill d-none d-md-inline"></i> Reference Books
          </h2>
          {/* <p class="lead text-muted">Lorem ipsum dolor sit amet.</p> */}
        </div>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id} class="list-unstyled">
              <Card
                title={book.title}
                courseTitle={book.author}
                courseCode={book.publishYear}
                link={book.link}
              />
            </li>
          ))}
        </ul>
      )}
      </div>
    </section>
  );
};

export default Books;