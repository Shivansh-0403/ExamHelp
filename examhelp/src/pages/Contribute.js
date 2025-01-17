import React, { useState } from 'react';
import Filetype from "../components/Filetype";
import Filetypenote from "../components/Filetypenote";
import Filetypebooks from "../components/Filetypebooks";

export default function Contribute() {
  const [fileType, setFileType] = useState("");

  const handleFileTypeChange = (e) => {
    setFileType(e.target.value);
  };

  return (
    <section id="contribute" className="bg-light mt-4" style={{ backgroundColor: "rgb(240, 238, 238)" }}>
      <div className="container-lg">
        <div className="text-center">
          <h2>
            <i className="bi bi-hand-index-thumb-fill"></i>Contribute Us & Help Your Friends..
          </h2>
          <p className="lead text-muted">
            Upload your Question Papers, Handwritten Notes & Reference Books
          </p>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <form action="">
              <label htmlFor="contribution" className="form-label">
                File Type
              </label>
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="bi bi-question-circle-fill"></i>
                </span>
                <select className="form-select" aria-label="Default select example" id="subject" value={fileType} onChange={handleFileTypeChange}>
                  <option value="">Select the file type</option>
                  <option value="Notes">Notes</option>
                  <option value="PYQ's">PYQ's</option>
                  <option value="Books">Books</option>
                </select>
              </div>

              <div className=" text-center">
                <button type="submit" className="btn btn-warning">
                  Submit <i className="bi bi-send-fill"></i>
                </button>
              </div>
              
              {fileType === "PYQ's" && <Filetype />}
              {fileType === "Notes" && <Filetypenote />}
              {fileType === "Books" && <Filetypebooks />}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
