import { Link } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
const Home = ({ quizzes, setQuizData }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const handleSelectedQuiz = (quiz) => {
    setQuizData(quiz);
  };

  const handleGetStarted = () => {
    setShowSignIn(true);
  };

  return (
    <main className="mx-auto mt-8 px-6 text-xl sm:px-16 xl:flex xl:w-full xl:items-start xl:px-0">
      {showSignIn ? (
        <SignIn /> // Render the SignIn component when showSignIn is true
      ) : (
        <section className="flex flex-col gap-4 xl:w-1/2">
          <h2 className=" mb-2 flex flex-col text-[40px] leading-tight sm:text-[64px]">
            <span className="font-extralight">Plan in seconds,</span>
            <span className="font-medium"> not weekends.</span>
          </h2>
          <button
            className="w-1/2 p-5 bg-violet-800 text-white rounded-md dark:text-lightBluish sm:text-xl"
            onClick={handleGetStarted}
          >
            GetStarted.
          </button>
        </section>
      )}
      {/* <section className="flex flex-col gap-4 xl:w-1/2">
        <h2 className=" mb-2 flex flex-col text-[40px] leading-tight sm:text-[64px]">
          <span className="font-extralight">Plan in seconds,</span>
          <span className="font-medium"> not weekends.</span>
        </h2>
        <button className="w-1/2 p-5 bg-violet-800 text-white rounded-md dark:text-lightBluish sm:text-xl">
           GetStarted.
        </button>
      </section> */}

      <section className="mt-10 flex flex-col gap-3 sm:gap-6 xl:mt-0 xl:w-1/2 xl:items-end">
        {quizzes.map((quiz) => {
          return (
            <Link
              to={"/quiz"}
              key={quiz.title}
              className="flex h-16 cursor-pointer items-center gap-4 rounded-xl bg-white p-3 drop-shadow-sm transition-all duration-200 ease-in-out hover:opacity-75 dark:bg-navy sm:h-20 sm:gap-8 sm:rounded-3xl xl:h-24 xl:w-[564px] xl:p-5"
              onClick={() => handleSelectedQuiz(quiz)}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-md sm:h-14 sm:w-14 sm:rounded-xl"
                style={{ backgroundColor: quiz.iconbg }}
              >
                <img
                  src={quiz.icon}
                  alt={quiz.title}
                  className="h-7 w-7 sm:h-10 sm:w-10"
                />
              </div>

              <p className="text-lg font-medium sm:text-[28px]">{quiz.title}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Home;