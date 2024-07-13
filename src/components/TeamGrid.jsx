import React from "react";

const TeamGrid = ({ teams }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {teams.map((team, index) => (
        <div key={index} className="bg-emerald-600 text-white shadow-md p-4 rounded">
          <h3 className="text-lg font-bold">{team.name}</h3>
          <ul className="list-disc pl-4">
            {team.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
