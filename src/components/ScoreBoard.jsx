import React from "react";
import { useLocation } from "react-router-dom";
import TeamList from "./TeamList";

const Scoreboard = () => {
  const location = useLocation();
  const teams = location.state?.teams;

  if (!teams) {
    return <p>No teams data found.</p>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-300 shadow-md rounded text-black">
      <h2 className="text-3xl font-bold mb-4 text-violet-700 justify-center items-center flex underline">SCOREBOARD</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {teams.map((team, index) => (
          <TeamList key={index} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;