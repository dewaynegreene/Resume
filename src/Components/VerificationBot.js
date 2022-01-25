import React from "react";
import ParticlesBg from "particles-bg";

function VerificationBot(){
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

          <li>
            <a href="/Memory">
              Memory
            </a>
          </li>

          <li>
            <a href="/DiscordBot">
              Discord Bot
            </a>
          </li>

          <li className="current">
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
          <h1>Verification Bot</h1>
        <hr />
      </div>
      <div>
        <p></p>
        <h3>The Verification Bot is a project done for the USF Esports program in order to maintain an accurate representation of student
          involvement and in order to give students who were verified with USF Esports perks.
        </h3>
        <p></p>
      </div>
      <div>
        <h2>How it works</h2>
        <h3>When a user joins the USF Esports discord server, they are greeted with a welcome channel where they have some steps to follow
          in order to get the most out of the server. One of those steps is to react to a message with whether they are a current student, 
          an alumni, or a visitor. If the user selects that they are a current student, the application will send it a message asking
          the user to verify themselves by using their student U number. Once the user replies, the response which is interpreted as a string
          will go through some input validation to make sure that the U number is formatted correctly before querying into the database. 
        </h3>
        <p></p>
      </div>
      <h2>The Database</h2>
      {/* <img src="images/config.png" alt="config"></img> Show the schema here */}
      <h3>The database is stored on MongoDB and contains the first and last name of each student that goes to USF and also their 
        student U number. This database is connected to our application but also connected to Fusion API. Fusion is a centralized database 
        used by USF when students get enrolled into the system. Every 24 hours, our application checks fusion for any changes to the student database 
        and makes those changes to our database as well. This is done to account for transfer students and students that are no longer 
        at the university to maintain an accurate count of students.
      </h3>
      <p></p>
      <h2>The Search</h2>
      {/* <img src="images/config.png" alt="config"></img> */}
      <p></p>
      <h3>Once the application determines that the string that the user enters is formatted correctly, it will query into the database and 
        look for that U number. If the string is not formatted correctly, they will get a message telling them that the string is not formatted 
        correctly and will give them an example of how to format it correctly, along with the contact info for the developers in case they are 
        running into any problems. The application will then look through the database for the U Number and return to the user whether or not they were found. 
        If they were found, the database will update the users info in the database and send them a message saying they have been added. They 
        will also be given the verified student role in the USF Esports discord channel.
      </h3>
      <p></p>
      {/* <h2>Leaderboard</h2>
      {/* <img src="images/Scoreboard.png" alt="Scoreboard" className="center"></img> */}
      <div>
        {/* <p></p>
        <h3>At the end of the game, the top 5 people on the leaderboard will be displayed on the screen. The leaderboard is pulled from a text
          file that stores the names and the scores of the top 5 games.
        </h3>
        <p></p> */}

      </div>
    </div>
  </div>
  
);
}

export default VerificationBot;
