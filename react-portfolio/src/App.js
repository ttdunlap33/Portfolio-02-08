import logo from './logo.svg';
import './App.css';
import React from 'react'
import TypeWriter from 'react-typewriter';
import MovingText from 'react-moving-text';

// <h1 id="title" class='masthead-heading'><TypeWriter typing={1} maxDelay={300}>Thomas Dunlap's Portfolio</TypeWriter></h1>

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header class='masthead'>
          <div>
            <h1 id="title" class='masthead-heading'><MovingText
            //bounce, flipFromLeftToCenter, pulse
      type="shadow"
      duration="3000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
      Thomas Dunlap's Portfolio
    </MovingText></h1>
          </div>
        </header>
      
        <main>
          <div class="products">
            <section class="card">
              <h2><a href="https://tech-blog-ttd.herokuapp.com/login" class="GitHub">Tech Blog</a></h2>
              <div style={{ textAlign: "center" }}>
                <img src="https://i.postimg.cc/kMkZpS2G/projecticon.png" alt="Github" class="cardImage"/>
              </div>

              <p>Get Blogging!</p>
            </section>
            <section class="card">
              <h2><a href="https://ttdunlap33.github.io/movie-project/" class="GitHub">Movie Grab</a></h2>
              <div style={{ textAlign: "center" }}>
                <img src="https://i.postimg.cc/k69GcYzc/6b4a738dd051ec314307435efa574807.png" alt="Github" class="cardImage"/>
              </div>

              <p>Movie Recommender</p>
            </section>
            <section class="card">
              <h2><a href="https://ttdunlap33.github.io/work-day-scheduler/" class="GitHub">Daily Planner</a></h2>
              <div style={{ textAlign: "center" }}>
                <img src="https://i.postimg.cc/13VHXH0y/planner-icon.png" alt="Github" class="cardImage"/>
              </div>

              <p>Work Day Scheduler</p>
            </section>

            <section class="card">
              <h2><a href="https://github.com/ttdunlap33/ORM-e-commerce-back-end" class="GitHub">E-Commerce</a></h2>
              <div style={{ textAlign: "center" }}>
                <img src="https://i.postimg.cc/kMkZpS2G/projecticon.png" alt="Github" class="cardImage"/>
              </div>

              <p>E-Commerce Back End</p>
            </section>
            <section class="card">
              <h2><a href="https://obscure-savannah-27381.herokuapp.com/" class="GitHub">Note Taker</a></h2>
              <div style={{ textAlign: "center" }}>
                <img src="https://i.postimg.cc/3Wnn5sKP/2892274-200.png" alt="Github" class="cardImage"/>
              </div>

              <p>Take some notes</p>
            </section>
            <section class="card">
              <h2><a href="https://ttdunlap33.github.io/weather-dashboard-06/" class="GitHub">Weather Planner</a></h2>
              <div style={{ textAlign: "center" }}>
                <img src="https://i.postimg.cc/43dXpYd4/cloudyweather.png" alt="Github" class="cardImage"/>
              </div>

              <p>Plan ahead!</p>
            </section>
          </div>
          <article class="back-article" style={ {backgroundColor: "#343434" }}>
            <p class="text information">I'm currently completing my first experience in web programming.  I am really enjoying creating front-end and back-end applications that use modern technologies and allow me to express myself creatively.  When I'm not coding, you will find me binging on Movies, climbing Mountains, or listening to Music.
            </p>
            <p class="text information">
            Take a look at my current project portfolio or check out my Resume for more information.
            </p>
            <p class="text information">Some of my skills are:</p>
            <ul>
              <li class="list">HTML</li>
              <li class="list">CSS</li>
              <li class="list">JavaScript</li>
              <li class="list">MySQL</li>
              <li class="list">MongoDB</li>
              <li class="list">Git/GitHub</li>
            </ul>
          </article>
        </main>

        <nav>
          <a href="https://github.com/ttdunlap33">GitHub</a>
          <a href="https://www.linkedin.com/in/thomastdunlap/">LinkedIn</a>
          <a href="./assets/img/resume.PDF">Resume</a>
        </nav>

        <footer>
          <h3>
          <div>847-220-0933</div>
          <a href = "mailto: ttdunlap33@gmail.com">ttdunlap33@gmail.com</a>
          </h3>
        </footer>
      </div>
    );
  }
}

export default App;