import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const PYQs = () => {
  const [PYQs, setPYQs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPYQs = async () => {
      try {
        const response = await fetch("http://localhost:5000/pyqs");
        const data = await response.json();
        console.log(data);
        setPYQs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching PYQs:", error.message);
        setLoading(false);
      }
    };

    fetchPYQs();
  }, []);
  return (
    <section
      id="books"
      classname="bg-light mt-4"
      style={{ padding: "60px 0px", backgroundColor: "rgb(240, 238, 238)" }}
    >
      <div classname="container-lg">
        <div classname="text-center">
          <h2>
            <i classname="bi bi-info-circle-fill d-none d-md-inline m-auto"></i> Previous Sem Papers
          </h2>
          {/* <p classname="lead text-muted">Lorem ipsum dolor sit amet.</p> */}
        </div>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {PYQs.map((pyqsObj) => (
            <div key={pyqsObj._id} classname="list-unstyled">
              <Card
                courseTitle={pyqsObj.courseTitle}
                courseCode={pyqsObj.courseCode}
                facultyName={pyqsObj.facultyName}
                term={pyqsObj.term}
                academicYear={pyqsObj.academicYear}
                link={pyqsObj.link}
              />
            </div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
};

export default PYQs;