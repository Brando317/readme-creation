import "./App.css";
import React, { useState, useEffect } from "react";
import GameItem from "./components/GameItem";
import Congratulations from "./components/Congratulations";

function App() {
    const best = localStorage.getItem("best");

    const [score, setScore] = useState(0),
    const [bestScore, setbestScore] = useState(best ? best : 0),
    const [numbers, setNumbers] = useState([
        {

}
])











          content: "ichi",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "ni",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "san",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "shi",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "go",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "roku",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "shichi",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "hachi",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "kyuu",
          wasViewed: false,
          color: randomHEX(),
        },
        {
          content: "juu",
          wasViewed: false,
          color: randomHEX(),
        },
      ])

  function randomHEX() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  function flashCongratulations() {
    const congrats = document.getElementById("congratulations");
    congrats.classList.toggle("show-congrats");
    setTimeout(() => congrats.classList.toggle("show-congrats"), 5000);
  }

  function checkScore(item, answer) {
    let tempArray = randomizeNumbers();
    // Checks item has been click vs user answer
    if (item.wasViewed === answer) {
      let incrementedScore = score + 1;
      // Correct answer
      // Continue playing the game, increasing the score
      if (incrementedScore === 10) {
        // User has won the game
        // Reset game, save best score

        // Display congratulations message
        flashCongratulations();

        // Set score to 0, save best score, randomize numbers
        localStorage.setItem("best", incrementedScore);
        setScore(0)
        setbestScore(incrementedScore)
        setNumbers(tempArray)
      } else {
        // Continue playing
        tempArray.forEach((num) => {
          if (num.content == item.content) {
            num.wasViewed = true;
          }
        });
        const newBest =
          bestScore > incrementedScore
            ? bestScore
            : incrementedScore;

        localStorage.setItem("best", newBest);

          setScore(incrementedScore)
          setbestScore(newBest)
          setNumbers(tempArray)
      }
    } else {
      // Incorrect answer, reset game
      // ========= REFACTOR TO DRY
      tempArray.forEach((item) => {
        item.wasViewed = false;
      });
      setScore(0)
        setbestScore(bestScore > score
            ? bestScore
            : score)
        setNumbers(tempArray)
    }
  }

  function randomizeNumbers() {
    let array = numbers;
    let index = numbers.length,
      temporaryIndex,
      randomIndex;

    while (0 !== index) {
      randomIndex = Math.floor(Math.random() * index);
      index -= 1;

      temporaryIndex = array[index];
      array[index] = array[randomIndex];
      array[index].color = randomHEX();
      array[randomIndex] = temporaryIndex;
      array[randomIndex].color = randomHEX();
    }

    return array;
  }

    const randomIndex = Math.floor(Math.random() * numbers.length);
    const selectedNum = numbers[randomIndex];

    return (
      <main className="App">
        <header className="App-header">
          <h1>React Memory Game</h1>
          <p>
            Objective: Answer the questions to test your memory.<br></br>
            Highest score is 10!
          </p>
          <div className="App-scoreboard">
            <span>Score: {score}</span>
            <span>Best Score: {bestScore}</span>
          </div>
        </header>
        <section className="App-container">
          <Congratulations />
          <div className="App-item-container">
            <GameItem value={selectedNum} />
            <div>
              <h3>Have you seen this number yet?</h3>
              <button
                id="no"
                className="btn"
                onClick={() => checkScore(selectedNum, false)}
              >
                No
              </button>
              <button
                id="yes"
                className="btn"
                onClick={() => checkScore(selectedNum, true)}
              >
                Yes
              </button>
            </div>
          </div>
        </section>
      </main>
    );
}

export default App;
   
