import React, { useState } from "react";
import TeamForm from "./TeamForm";
import TeamGrid from "./TeamGrid";

const CreateQuiz = () => {
  const [showForm, setShowForm] = useState(false);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [teams, setTeams] = useState([]);

  const handleCreateQuizClick = () => {
    setShowForm(true);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowTeamForm(true);
  };

  return (
    <div>
      {!showForm && !showTeamForm && (
        <h1 className=" mx-auto mb-10 text-4xl text-center text-gray-800 max-w-lg p-6 border-2 border-gray-600 rounded-lg bg-white shadow-lg italic">
        I'm hosting a quiz show, but I never considered myself a game show host. - Maury Povich
      </h1>
      )}
      {!showForm && !showTeamForm && (
        <button
          className="mx-auto mb-5 flex items-center justify-center rounded-lg bg-teal-700 px-5 py-2.5 text-3xl font-medium text-white"
          onClick={handleCreateQuizClick}
        >
          Create Quiz
        </button>
      )}
      {showForm && (
        <form
          className="mx-auto max-w-md rounded bg-white p-4 shadow-md"
          onSubmit={handleNextClick}
        >
          <h2 className="mb-4 text-3xl font-bold text-emerald-600">
            Create Quiz
          </h2>
          <label className="mb-4 block">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              className="block w-full border border-gray-300 p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter quiz title"
            />
          </label>
          <label className="mb-4 block">
            <span className="text-gray-700">Coordinator</span>
            <input
              type="text"
              className="mb-5 block w-full border border-gray-300 p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter coordinator name"
            />
          </label>
          <button
            type="submit"
            className="mb-4 w-full rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
          >
            Next
          </button>
        </form>
      )}
      {showTeamForm && (
        <div>
          <TeamForm teams={teams} setTeams={setTeams} />
          <TeamGrid teams={teams} />
        </div>
      )}
    </div>
  );
};

export default CreateQuiz;
