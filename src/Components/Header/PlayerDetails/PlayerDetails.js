import React from "react";
import "./PlayerDetails.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const PlayerDetails = (props) => {
  const { name, img, salary } = props.playerDetails;
  return (
    <div className="card-container">
      <div className="card-decoration">
        <Card style={{ width: "18rem" }}>
          <Card.Img src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Salary: {salary}</Card.Text>
            <Button
              onClick={() => props.handleAddPlayer(props.playerDetails)}
              variant="primary"
            >
              <FontAwesomeIcon icon={faUserPlus} />
              Add Me
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PlayerDetails;
