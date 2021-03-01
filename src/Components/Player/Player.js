import React from "react";
import PlayerData from "../../data/data.json";
import { useEffect, useState } from "react";
import "./Player.css";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import Team from "../Team/Team";
import { Col, Container, Row } from "react-bootstrap";

const Player = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(PlayerData);
  }, []);

  const [team, setTeam] = useState([]);

  const handleAddPlayer = (player) => {
    // console.log("Player added", player);
    const newTeam = [...team, player];
    setTeam(newTeam);
  };
  return (
    <div className="my-container">
      <div className="player-container">
        <Container>
          <Row>
            {players.map((pl) => (
              <Col sm={4}>
                <PlayerDetails
                  key={pl.id}
                  handleAddPlayer={handleAddPlayer}
                  playerDetails={pl}
                ></PlayerDetails>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div>
        <Team team={team}></Team>
      </div>
    </div>
  );
};

export default Player;
