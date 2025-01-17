import React from 'react'

const Filetype = (PYQ) => {
  return (
    <section id="contribute" class="bg-light mt-4" style={{ backgroundColor: "rgb(240, 238, 238)" }}>
      <div class="container-lg">

        <div class="row justify-content-center my-5">
          <div class="col-lg-6">
            <form action="">

              
              <label for="exam-title" class="form-label">
                Exam Title:
              </label>
              {/* <div class="input-group mb-4">
                <span class="input-group-text">
                  <i class="bi bi-question-circle-fill"></i>
                </span>
                <select class="form-select" aria-label="Default select example" id="subject">
                  <option selected>Open this menu</option>
                  <option value="mid">Mid Term</option>
                  <option value="end">End Term</option>
                </select>
              </div> */}


              {/* <label for="subject" class="form-label">
                Subject:
              </label> */}
              <div class="mb-4 input-group">
                <span class="input-group-text">
                  <i class="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="e.g. Operating System"
                  required
                />

                <span class="input-group-text">
                  <span
                    class="tt"
                    data-bs-placement="bottom"
                    title="Pretty self explanatory really..."
                  >
                    <i class="bi bi-question-circle text-muted"></i>
                  </span>
                </span>
              </div>

              <label for="course-code" class="form-label">
                Course Code:
              </label>
              <div class="mb-4 input-group">
                <span class="input-group-text">
                  <i class="bi bi-person-fill"></i>
                </span>
                <input
                  type=""
                  class="form-control"
                  id="course-code"
                  placeholder="e.g. CSE3011"
                  required
                />

                <span class="input-group-text">
                  <span
                    class="tt"
                    data-bs-placement="bottom"
                    title="Pretty self explanatory really..."
                  >
                    <i class="bi bi-question-circle text-muted"></i>
                  </span>
                </span>
              </div>

              <div class="mb-3">
                <label for="formFileSm" class="form-label">Upload PYQ (pdf or docx)</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file"/>
              </div>

              <div class="mb-4 text-center">
                <button type="submit" class="btn btn-warning">
                  Submit <i class="bi bi-send-fill"></i>
                </button>
              </div>

              

              
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filetype
