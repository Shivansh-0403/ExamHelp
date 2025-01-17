import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:3001/pyqs");
        const data = await response.json();
        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notes:", error.message);
        setLoading(false);
      }
    };

    fetchNotes();
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
            <i class="bi bi-info-circle-fill d-none d-md-inline"></i> Previous Sem Papers
          </h2>
          {/* <p class="lead text-muted">Lorem ipsum dolor sit amet.</p> */}
        </div>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id} class="list-unstyled">
              <Card
                title={note.title}
                courseTitle={note.courseTitle}
                courseCode={note.courseCode}
                link={note.link}
              />
            </li>
          ))}
        </ul>
      )}
      </div>
    </section>
  );
};

export default Notes;