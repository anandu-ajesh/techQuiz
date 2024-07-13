import React, { useState } from "react";

const TeamForm = ({ teams, setTeams }) => {
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamMembers, setNewTeamMembers] = useState("");
  const [showTeamList, setShowTeamList] = useState(false); // new state to track whether to show the team list

  const handleAddTeam = () => {
    if (teams.length < 10) {
      const newTeam = {
        name: newTeamName,
        members: newTeamMembers.split(","),
        score: 0, // initialize score to 0
      };
      setTeams([...teams, newTeam]);
      setNewTeamName("");
      setNewTeamMembers("");
    } else {
      alert("Maximum 10 teams can be added");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTeamList(true); // show the team list when the "Start Quiz" button is clicked
  };

  return (
    <div className="mx-auto max-w-md rounded bg-white p-4 shadow-md">
      {showTeamList ? (
        <TeamList teams={teams} /> // render the TeamList component if showTeamList is true
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4 flex items-center justify-center text-3xl font-bold text-emerald-600">
            Add Teams
          </h2>
          <label className="mb-4 block">
            <span className="text-gray-700">Team Name</span>
            <input
              type="text"
              className="block w-full border border-gray-300 p-2 pl-10 text-sm text-gray-700"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              placeholder="Enter team name"
            />
          </label>
          <label className="mb-4 block">
            <span className="text-gray-700">
              Team Members (comma separated)
            </span>
            <input
              type="text"
              className="block w-full border border-gray-300 p-2 pl-10 text-sm text-gray-700"
              value={newTeamMembers}
              onChange={(e) => setNewTeamMembers(e.target.value)}
              placeholder="Enter team members"
            />
          </label>
          <button
            type="button"
            className="mb-4 w-full rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
            onClick={handleAddTeam}
          >
            Add Team
          </button>
          <button
            type="submit"
            className="mb-4 w-full rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
          >
            Start Quiz
          </button>
        </form>
      )}
    </div>
  );
};

const TeamList = ({ teams }) => {
  return (
    <div>
      <h2 className="text-black items-center justify-center flex font-bold text-2xl">Score Board</h2>
      <div className="grid grid-cols-2 gap-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className="rounded bg-white p-4 text-black shadow-md"
          >
            <h3>{team.name}</h3>
            <p>Members: {team.members.join(", ")}</p>
            <p>Score: {team.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamForm;
