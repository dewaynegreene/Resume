import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

function RocketLeagueOverlay(){

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

          <li className="current">
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
      <div className="row">
        <div className="banner-text">
            <p></p>
            <h1>Rocket League Overlay</h1>
          <hr />
          <Fade bottom duration={2000}>
            <video width="100%" controls muted loop>
              <source src="videos/RocketLeagueClip.mp4" type="video/mp4"/>
            </video>
          </Fade>
        </div>
      </div>
      <div className="row">
        <div className="column five">
        </div>
        <div className="column twelve">
        <h3>The Rocket League Overlay was a project done for USF Esports.
          The purpose of this project is to provide an overlay to the videogame "Rocket League"
          that allows the viewer to have a better understanding of the game with a clean look to it.
          This project was made using Javascript, JQuery, HTML, and CSS
        </h3>
        </div>
      </div>
      <p></p>
      <div className="row">
        <h2>What is Rocket League</h2>
        <div className="column six">
          <img src="images/RocketLeagueLogo.png" alt="RocketLeagueLogo" className=" image center"></img>
        </div>
        <div className="column six align-center" style={{'vertical-align': 'middle'}}>
          <h3>Rocket League is a vehicular soccer video game developed and published
            by Psyonix.
          </h3>
        </div>
        <p></p>
      </div>
        <h2>Backend</h2>
        <h3>This project communicates directly with the Rocket Leagues clientside API
          to read the information that is needed to display on the front end of the project.
          For this, we use an open source software called Bakkesmod which is a plugin that allows 
          players to add additional plugins to the game such as additional maps or car decals. For 
          this project, we use Bakkesmod in order to connect with the games API along with a Relay
          created by SimpleAOB called "SOS-WS Relay",  which runs locally on your machine. 
          
          Once you run the relay, it will look to see if bakkesmod and Rocket League are both active.
          
        </h3>
        <p></p>
        <h2>Settings</h2>
        <img src="images/config.png" alt="config"></img>
        <p></p>
        <h3>A config json file was made to allow some customizability to the user of this software, which are 
          usually producers that are not too familiar with the code itself. The event title is displayed 
          at the top of the scoreboard above the team names and scores. Goal Transitions are set to a boolean that
          can be turned on or off depending on whether or not the producer wants them on or off. These transitions are
          videos that play when a goal is scored for one of the teams. Some events have videos they like to play with sponsors;
          this allows for those to be added. Manual Score is an option that is added incase the series score does not start at 0-0.
          The overlay will keep track of the series score over the course of the matches automatically, but if there is an error in the 
          lobby, it will throw an error that will tell the producer that the series score may not be correct and they they might want to 
          turn on manual score. When this is enabled, the score you give each team will light up the appropriate amount of rectangles under 
          the team. The Left and Right teams have attributes such as team name, Hex Color, TransitionName and Score. The hex color attribute 
          is used to set the team colors on the scoreboard for the color of the team.
        </h3>
        <p></p>
        <h2>Scoreboard</h2>
        <img src="images/RocketLeagueLogo.png" alt="Scoreboard" className=" image center"></img>
        <div>
          <p></p>
          <h3>The scoreboard that covers the top left of the screen shows the team names, the score of the match, the series score,
            and the time remaining in the game. The rectangles below each team indicate the series score. There there is also 
            a version where you can run a scoreboard with 4 bars under the teams for best of 7 series'.
          </h3>
          <p></p>
          <h2>Boost Meters</h2>
          <img src="images/BoostMeters.png" alt="BoostMeter" className="center"></img>
          <p></p>
          <h3>The boost meters indicate how much boost a player has at any given moment. These boost meters are updated every gametick and since
            Rocket League uses 60 tick servers, is updated every 1/60th of a second. The player names are pulled from the games API and is updated 
            if a player leaves or joins.
          </h3>

        </div>
    </div>
    
  );
}


export default RocketLeagueOverlay;
