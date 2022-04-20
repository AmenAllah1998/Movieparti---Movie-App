import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import "./MovieCard.css";
function MovieCard({ id,name, img_url, categories, like, dislike,toLike,toDislike,toDelete }) {
  let ratio = parseInt(
    ((parseFloat(like) - parseFloat(dislike)) /
      (parseFloat(like) + parseFloat(dislike))) *
      100
  );
  if (isNaN(ratio)) {
    ratio = 0;
  }
  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-img">
            <Card.Img variant="top" src={img_url} height="500rem" />
            <div className="overlay">
              <Button variant="danger icon" onClick={() => toDelete(id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
          </div>

          <div className="card-body">
            <div className="d-flex justify-content-between ">
              <Card.Title>{name}</Card.Title>
              {ratio >= 0 ? (
                <p style={{ color: "#128c02" }}>{ratio}%</p>
              ) : (
                <p style={{ color: "#d30404" }}>{Math.abs(ratio)}%</p>
              )}
            </div>
            <div className="mb-2">
              {<span className="badge bg-orange me-1">{categories}</span>}
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Button type="button" variant="outline-secondary" onClick={() => toLike(id)}>
                  <FontAwesomeIcon icon={faThumbsUp} /> Like ({like})
                </Button>
                <Button type="button" variant="outline-secondary" onClick={() => toDislike(id)}>
                  <FontAwesomeIcon icon={faThumbsDown} /> Dislike ({dislike})
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
