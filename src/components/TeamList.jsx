import React from "react";

const TeamList = ({ team }) => {
  return (
    <div
      className="bg-gray-200 p-4 rounded-md shadow-md text-black
        max-w-md mx-auto mb-4"
    >
      <h3
        className="text-3xl font-bold text-black
          tracking-wide uppercase mb-2"
      >
        {team.name}
      </h3>
      <ul
        className="list-none mb-4"
      >
        {team.members.map((member, index) => (
          <li
            key={index}
            className="text-xl text-gray-500
              hover:text-gray-700 transition duration-300 ease-in-out"
          >
            {member}
          </li>
        ))}
      </ul>
      <hr
        className="my-2 border-gray-300
          border-t-2 border-b-0 border-l-0 border-r-0"
      />
      <p
        className="text-emerald-600 text-xl font-bold
          tracking-wide uppercase mb-2"
      >
        Score: {team.score}
      </p>
    </div>
  );
};

export default TeamList;