import React from "react";
import "./ProjectsModal.css";

export default function ProjectsModal(props) {
  return (
    <div>
      <div
        className="modal fade"
        id={props.data.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                {props.data.title}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={props.data.image} alt={props.data.title} />
                  </div>
                  <div className="col-sm-6">
                    <p>{props.data.description}</p>
                    <a
                      className="modal-icons"
                      href={props.data.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github github-icon"></i>
                    </a>
                    <a
                      className="modal-icons"
                      href={props.data.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
