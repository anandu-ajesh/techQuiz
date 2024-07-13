import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import data from "../data.json";
import QuizPage from "./components/QuizPage";
import CreateQuiz from "./components/CreateQuiz";

function App() {
  const quizzes = data.quizzes;
  const [quizData, setQuizData] = useState({
    title: "",
    icon: "",
    iconbg: "",
    questions: [],
  });
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") ? localStorage.getItem("themeMode") : "light",
  );

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const handleThemeMode = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        handleThemeMode={handleThemeMode}
        title={quizData.title}
        icon={quizData.icon}
        iconbg={quizData.iconbg}
      />
      <Routes>
        <Route
          path="/"
          element={<Home quizzes={quizzes} setQuizData={setQuizData} />}
        />
        <Route path="/quiz" element={<QuizPage quizData={quizData} />} />
        <Route path="/dashboard" element={< CreateQuiz/>} />

      </Routes>
    </>
  );
}

export default App;