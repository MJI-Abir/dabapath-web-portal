import { useEffect, useState } from "react";
import puzzles from "../puzzle-data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Puzzle() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [answer, setAnswer] = useState("");
  const [random, setRandom] = useState(null);
  const puzzle = puzzles.filter((puzzle) => {
    return puzzle.difficulty === selectedDifficulty;
  });

  useEffect(() => {
    getRandomInt();
  }, []);

  function handleAnswerSubmit(event) {
    event.preventDefault();
    if (puzzle[getRandomInt()].solution === answer) {
      toast.success("Correct Answer!");
    } else {
      toast.error("Incorrect Answer!");
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(puzzle.length);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="mb-12 min-h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="my-20 bg-white p-8 rounded-lg shadow-md w-1/3 mx-auto justify-center">
        <img src={puzzle[getRandomInt()].image} alt="" className="w-full" />
        <form onSubmit={handleAnswerSubmit}>
          <div className="mt-4">
            <label className="block font-medium text-gray-700" htmlFor="answer">
              Solution (in PGN format)
            </label>
            <input
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              type="text"
              name="answer"
              id="answer"
              placeholder="Kxd6, Qxd4+, exf5+"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
        <div className="mt-4">
          <label
            className="block font-medium text-gray-700"
            htmlFor="difficulty"
          >
            Difficulty
          </label>
          <select
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            name="difficulty"
            id="difficulty"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Puzzle;