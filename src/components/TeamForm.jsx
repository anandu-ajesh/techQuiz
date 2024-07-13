import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamForm = ({ teams, setTeams }) => {
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamMembers, setNewTeamMembers] = useState('');
  const navigate = useNavigate();

  const handleAddTeam = () => {
    if (teams.length < 10) {
      const newTeam = {
        name: newTeamName,
        members: newTeamMembers.split(','),
        score: 0, // add a score property to each team
      };
      setTeams([...teams, newTeam]);
      setNewTeamName('');
      setNewTeamMembers('');
    } else {
      alert("Maximum 10 teams can be added");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Team form submitted:', teams);
    navigate("/scoreboard", { state: { teams } }); // pass teams data to scoreboard route
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold mb-4 text-emerald-500 justify-center items-center flex">Add Teams</h2>
      <label className="block mb-4">
        <span className="text-gray-700">Team Name</span>
        <input type="text" className="block w-full border border-gray-300 p-2 pl-10 text-sm text-gray-700" value={newTeamName} onChange={(e) => setNewTeamName(e.target.value)} placeholder="Enter team name" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Team Members (comma separated)</span>
        <input type="text" className="block w-full border border-gray-300 p-2 pl-10 text-sm text-gray-700" value={newTeamMembers} onChange={(e) => setNewTeamMembers(e.target.value)} placeholder="Enter team members" />
      </label>
      <button type="button" className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold mb-4 py-2 px-4 rounded" onClick={handleAddTeam}>
        Add Team
      </button>
      <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold mb-4 py-2 px-4 rounded">
        Start Quiz
      </button>
    </form>
  );
};

export default TeamForm;