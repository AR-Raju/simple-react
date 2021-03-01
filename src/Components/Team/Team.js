import React from "react";

const Team = (props) => {
  const team = props.team;

  const totalSalary = team.reduce((total, pl) => total + pl.salary, 0);
  return (
    <div>
      <h3 className="text-primary">Total Selected Players: {team.length}</h3>
      <h3 className="text-primary">Total Budget: {totalSalary}</h3>
      <ol>
        {team.map((pl) => (
          <h3>
            <li>
              {pl.name} <small>({pl.salary})</small>
            </li>
          </h3>
        ))}
      </ol>
    </div>
  );
};

export default Team;
