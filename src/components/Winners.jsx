import React from "react";
import { useLocation } from "react-router-dom";

const Winners = () => {
  const location = useLocation();
  const teams = location.state?.teams;

  if (!teams) {
    return <p className="text-lg text-gray-600">No teams data found.</p>;
  }

  const winningTeam = teams.reduce((max, current) => {
    return max.score > current.score ? max : current;
  }, teams[0]);

  return (
    <div className="mx-auto flex items-center rounded-full bg-white">
      <div
        className="h-[600px] w-[600px]  bg-cover bg-center rounded-lg "
        style={{
          backgroundImage: `url('https://cdn.dribbble.com/users/311928/screenshots/6574041/congrats2_4x.png?resize=1000x750&vertical=center')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className=" flex h-[600px] w-[600px]  items-center justify-center p-4 pb-8 pt-6 font-serif shadow-md rounded-tr-full rounded-br-full" >
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-2 text-4xl font-bold text-orange-500">
            Winning Team: {winningTeam.name}
          </h3>
          <p className="mb-2 text-2xl font-bold text-blue-700">
            Score: {winningTeam.score}
          </p>
          <p className="text-lg font-bold text-black">
            Members: {winningTeam.members.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Winners;
