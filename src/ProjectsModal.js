import React from "react";
import "./ProjectsModal.css";

export default function ProjectsModal(props) {
  return (
    <div className="ProjectsModal">
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
            <div className="modal-body p-0">
              <div className="container-fluid modal-container p-4">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      className="img-fluid modal-image pe-2 mb-4"
                      src={props.data.cover}
                      alt={props.data.title}
                    />
                  </div>
                  <div className="col-sm-6">
                    <p className="modal-text">
                      {props.data.description} <br />
                      <br />
                      View repository or visit the live site:
                    </p>
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
                <div className="row mt-4">
                  <div className="col-sm-6">
                    <h4>Purpose</h4>
                    <p className="modal-text pe-2">{props.data.purpose}</p>
                  </div>
                  <div className="col-sm-6">
                    <img className="img-fluid" src={props.data.image} alt="" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm">
                    <h4>Web Stack</h4>
                    <p className="modal-text">{props.data.stack}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary close-btn"
                data-bs-dismiss="modal"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
