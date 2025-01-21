import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const Card = ({courseTitle, courseCode, facultyName, term, academicYear, link }) => {
  return ( 
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="list-group">
          <div class="card my-3 mx-10 ">
            <div class="card-header d-flex">
              <div class="px-2 flex-grow-1">
                <h5 class="mb-1">{courseTitle} - {courseCode}</h5>
              </div>
              <div class="px-3">
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <FontAwesomeIcon icon={faEye} />
              </a>

              </div>
              <div class="px-3">
                <FontAwesomeIcon icon={faFileArrowDown} />
              </div>
            </div>
            <div className="container">
              <h6>{facultyName}</h6>
              <h6>{term}</h6>
              <h6>{academicYear}</h6>
              {/* <div class="d-flex justify-content-between">
                <small>Exam Date: Sep 07, 2023</small>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
