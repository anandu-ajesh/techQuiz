import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TeamList from "./TeamList";
import { Route, Routes } from "react-router-dom";
import Winners from "./Winners";

const Scoreboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const teams = location.state?.teams;

  if (!teams) {
    return <p>No teams data found.</p>;
  }

  const handleFinishQuiz = (e) => {
    e.preventDefault();
    navigate("/winners", { state: { teams } });
  };

  return (
    <div className="container mx-auto rounded bg-gray-300 p-4 text-black shadow-md">
      <h2 className="mb-4 flex items-center justify-center text-3xl font-bold text-violet-700 underline">
        SCOREBOARD
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {teams.map((team, index) => (
          <TeamList key={index} team={team} />
        ))}
      </div>
      <button
        className="mx-auto rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700 flex items-center justify-center"
        onClick={handleFinishQuiz}
      >
        Finish Quiz
      </button>
      <Routes>
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </div>
  );
};

export default Scoreboard;