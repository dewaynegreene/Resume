import React from "react";
import ParticlesBg from "particles-bg";

function MemoryGame(){
  return (
    <div className="pages">
    <div>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li>
            <a href="/#portfolio">
              Back to Home
            </a>
          </li>

          <li>
            <a href="/RocketLeagueOverlay">
              RL Overlay
            </a>
          </li>

          <li>
            <a href="/Snake">
              Snake
            </a>
          </li>

          <li className="current">
            <a href="/Memory">
              Memory
            </a>
          </li>

          <li>
            <a href="/DiscordBot">
              Discord Bot
            </a>
          </li>

          <li>
            <a href="/VerificationBot">
              Verification
            </a>
          </li>
        </ul>
      </nav>
    <p></p>
    </div>
    <ParticlesBg type="cobweb" bg={true} />

    <div>
      <div>
          <p></p>
          <h1>Snake Game</h1>
        <hr />
      </div>
      <div>
        <p></p>
        <h3>The Snake game is a game made with the Pygame library as a fun project
        </h3>
        <p></p>
      </div>
      <div>
        <h2>How it works</h2>
        <h3>Pygame is a set of modules designed for writing videogames. Using these modules, we try to emulate the orinigal snake game
          with a leaderboard and and some extra features.
        </h3>
        <p></p>
      </div>
      <h2>Menu</h2>
      <h3>When the game starts, you are greated with a menu to enter your name and to start the game. This name is used for tracking
        your score in the leaderboard when you complete the game
      </h3>
      <p></p>
      <h2>The Game</h2>
      {/* <img src="images/config.png" alt="config"></img> */}
      <p></p>
      <h3>Once you start the game, you will enter the game and can start playing by using the arrow keys. Your goal is to collect the 
        apples that are indicated by the red squares. Once you collect the apple, the new apples x and y position will be randomized 
        within the window and placed there. The length of the snake also gets increased by one when an apple is eaten. The way this is done
        is by drawing a snake square where the apple was before and have it follow the head of the snake, essentially do what the head of the 
        snake does, but one move behind. For every apple you collect, you get 10 points.
      </h3>
      <p></p>
      <h2>Leaderboard</h2>
      {/* <img src="images/Scoreboard.png" alt="Scoreboard" className="center"></img> */}
      <div>
        <p></p>
        <h3>At the end of the game, the top 5 people on the leaderboard will be displayed on the screen. The leaderboard is pulled from a text
          file that stores the names and the scores of the top 5 games.
        </h3>
        <p></p>

      </div>
    </div>
  </div>
  
);
}

export default MemoryGame;
