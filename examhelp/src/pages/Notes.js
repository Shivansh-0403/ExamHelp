import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:5000/notes");
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
      id="notes"
      className="bg-light mt-4"
      style={{ padding: "60px 0px", backgroundColor: "rgb(240, 238, 238)" }}
    >
      <div className="container-lg">
        <div className="text-center">
          <h2>
            <i className="bi bi-info-circle-fill d-none d-md-inline"></i> Notes
          </h2>
          {/* <p className="lead text-muted">Lorem ipsum dolor sit amet.</p> */}
        </div>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id} className="list-unstyled">
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